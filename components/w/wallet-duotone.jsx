import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf6-upbrn.css';
import '../../css/q/qs8co3srk.css';
import '../../css/q/qs4x5kbiy.css';
import '../../css/i/i2xzaiewc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wf6-upbrn"/><path class="qs8co3srk"/><path class="qs4x5kbiy"/><rect class="i2xzaiewc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:wallet-duotone"} {...others} />);
}

export default Component;
