import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjnxpnb1o.css';
import '../../css/d/dk6kerbsg.css';
import '../../css/b/be65o352o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xjnxpnb1o"/><path class="dk6kerbsg"/><path class="be65o352o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:piston-20"} {...others} />);
}

export default Component;
