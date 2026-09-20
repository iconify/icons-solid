import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/sc__xls2a.css';
import '../../css/n/nqxh0acwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="sc__xls2a"/><path class="nqxh0acwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:usb-flash-drive"} {...others} />);
}

export default Component;
