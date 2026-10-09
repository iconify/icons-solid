import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjnxpnb1o.css';
import '../../css/m/mr3oerbqw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xjnxpnb1o"/><path class="mr3oerbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-substation-20"} {...others} />);
}

export default Component;
