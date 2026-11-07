import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/asw3fob5g.css';
import '../../css/z/zsc5-p0ft.css';
import '../../css/d/dnl23qbfb.css';
import '../../css/f/fxxrxhu1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="asw3fob5g"/><path class="zsc5-p0ft"/><path class="dnl23qbfb"/><path class="fxxrxhu1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notes-line-duotone"} {...others} />);
}

export default Component;
