import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iba-o7bgl.css';
import '../../css/f/fzrqn6dxq.css';
import '../../css/k/kuz0qbccj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="iba-o7bgl"/><path class="fzrqn6dxq"/><path class="kuz0qbccj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:node-fetch-native"} {...others} />);
}

export default Component;
