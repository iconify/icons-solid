import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1ggfd8ih.css';
import '../../css/d/dgdiyfbzk.css';
import '../../css/t/tfy04tbhu.css';
import '../../css/r/ro0cgac2e.css';
import '../../css/x/xfs0_8bnq.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGCwd8aeSC" class="t1ggfd8ih"/><path id="SVGvbEHv8FD" class="dgdiyfbzk"/><path id="SVGIIQ5NdZa" class="tfy04tbhu"/><path id="SVGjRrmPb7y" class="ro0cgac2e"/></defs><g class="xfs0_8bnq"><use href="#SVGCwd8aeSC"/><use href="#SVGvbEHv8FD"/><use href="#SVGIIQ5NdZa"/><use href="#SVGjRrmPb7y"/></g><g class="ij2x_72vy"><use href="#SVGCwd8aeSC"/><use href="#SVGvbEHv8FD"/><use href="#SVGIIQ5NdZa"/><use href="#SVGjRrmPb7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:croissant"} {...others} />);
}

export default Component;
