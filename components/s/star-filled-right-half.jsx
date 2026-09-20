import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf2qh7htv.css';
import '../../css/w/w2alchb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path fill-opacity="0" class="jf2qh7htv"><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/></path><path stroke-dashoffset="36" class="w2alchb6j"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"/></path>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:star-filled-right-half"} {...others} />);
}

export default Component;
