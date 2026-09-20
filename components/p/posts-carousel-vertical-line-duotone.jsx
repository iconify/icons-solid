import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ye7qo4bza.css';
import '../../css/s/sp0979bhv.css';
import '../../css/s/sieuiccfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ye7qo4bza"/><path class="sp0979bhv"/><path class="sieuiccfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-vertical-line-duotone"} {...others} />);
}

export default Component;
