import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_g6_lbbk.css';
import '../../css/g/guoy00ruz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="s_g6_lbbk"/><path class="guoy00ruz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stackoverflow"} {...others} />);
}

export default Component;
