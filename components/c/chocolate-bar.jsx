import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nf_8hqbtu.css';
import '../../css/a/alqt4obhh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="nf_8hqbtu"/><path class="alqt4obhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:chocolate-bar"} {...others} />);
}

export default Component;
