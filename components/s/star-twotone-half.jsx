import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dul6jbcze.css';
import '../../css/w/w2alchb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path fill-opacity="0" class="dul6jbcze"><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"/></path><path stroke-dashoffset="36" class="w2alchb6j"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"/></path>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:star-twotone-half"} {...others} />);
}

export default Component;
