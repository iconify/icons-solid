import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyux0j27g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yyux0j27g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:up-right-and-down-left-from-center"} {...others} />);
}

export default Component;
