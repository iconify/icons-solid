import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vk5gw_r8i.css';
import '../../css/v/vqvyaqdbj.css';
import '../../css/t/tpp0pbuxr.css';
import '../../css/g/guxqo8m1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vk5gw_r8i"/><path class="vqvyaqdbj"/><path class="tpp0pbuxr"/><path class="guxqo8m1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:security-card"} {...others} />);
}

export default Component;
