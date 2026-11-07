import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yallzciul.css';
import '../../css/m/m-7zrk-pf.css';
import '../../css/p/pnuw8wf1j.css';
import '../../css/f/f93hblbdf.css';
import '../../css/d/d7qschzxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yallzciul"/><path class="m-7zrk-pf"/><path class="pnuw8wf1j"/><path class="f93hblbdf"/><path class="d7qschzxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-battery-bold-duotone"} {...others} />);
}

export default Component;
