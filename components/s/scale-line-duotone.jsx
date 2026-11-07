import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyf-9gbfh.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/j/jc2hwtrrg.css';
import '../../css/w/wvqgt30sr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wyf-9gbfh"/><path class="hwifnpb2v"/><path class="jc2hwtrrg"/><path class="wvqgt30sr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scale-line-duotone"} {...others} />);
}

export default Component;
