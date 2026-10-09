import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs5v-pa0a.css';
import '../../css/c/clh9fmvvs.css';
import '../../css/q/q_91rlk-i.css';
import '../../css/d/d28ovxb4j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hs5v-pa0a"/><path class="clh9fmvvs"/><path class="q_91rlk-i"/><path class="d28ovxb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:podcast-20"} {...others} />);
}

export default Component;
