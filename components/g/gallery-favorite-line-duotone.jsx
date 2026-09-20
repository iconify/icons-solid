import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zds-drrip.css';
import '../../css/p/p60zzsbrp.css';
import '../../css/n/n57mawbaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zds-drrip"/><path class="p60zzsbrp"/><path class="n57mawbaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-favorite-line-duotone"} {...others} />);
}

export default Component;
