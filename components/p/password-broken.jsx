import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rab0f4brr.css';
import '../../css/x/xqy9hdcap.css';
import '../../css/a/a0n9s38id.css';
import '../../css/s/spvw1m4wo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rab0f4brr"/><path class="xqy9hdcap"/><path class="a0n9s38id"/><path class="spvw1m4wo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-broken"} {...others} />);
}

export default Component;
