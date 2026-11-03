import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grb84xddd.css';
import '../../css/w/wd-ix_sxa.css';
import '../../css/e/eh35uyflb.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGrg9cCcwZ" class="grb84xddd"/></defs><use href="#SVGrg9cCcwZ" class="wd-ix_sxa"/><use href="#SVGrg9cCcwZ" class="eh35uyflb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hundred-points"} {...others} />);
}

export default Component;
