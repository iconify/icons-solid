import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piz1stbdx.css';
import '../../css/z/zcjjpsg5p.css';
import '../../css/t/te4svyq0w.css';
import '../../css/v/vftp51bjb.css';
import '../../css/l/l3qindbue.css';
import '../../css/f/fdtytm4ox.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="piz1stbdx"/><path class="zcjjpsg5p"/><path class="te4svyq0w"/><path class="vftp51bjb"/><path class="l3qindbue"/><path class="fdtytm4ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-farm-x-20-bold"} {...others} />);
}

export default Component;
