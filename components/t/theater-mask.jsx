import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pvuthvk9s.css';
import '../../css/p/ps176bbqh.css';
import '../../css/f/f-q5zsbhj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pvuthvk9s"/><path class="ps176bbqh"/><path class="f-q5zsbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:theater-mask"} {...others} />);
}

export default Component;
