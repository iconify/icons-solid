import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl-hvjv-v.css';
import '../../css/s/sp04sxb-l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sl-hvjv-v"/><path class="sp04sxb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kerbside-charger-20-bold"} {...others} />);
}

export default Component;
