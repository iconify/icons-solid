import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h86mgvbul.css';
import '../../css/q/q1twtkyxc.css';
import '../../css/y/y7fclmbmv.css';
import '../../css/x/xv2bueb3a.css';
import '../../css/k/k48qwhbyv.css';
import '../../css/w/wi7sf9bmc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h86mgvbul"/><path class="q1twtkyxc"/><path class="y7fclmbmv"/><path class="xv2bueb3a"/><path class="k48qwhbyv"/><path class="wi7sf9bmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:minidisc"} {...others} />);
}

export default Component;
