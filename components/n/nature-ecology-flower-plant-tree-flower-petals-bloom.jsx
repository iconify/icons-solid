import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h52z6y0kq.css';
import '../../css/u/uptbrubsm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><ellipse class="h52z6y0kq"/><path class="uptbrubsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-flower-plant-tree-flower-petals-bloom"} {...others} />);
}

export default Component;
