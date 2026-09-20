import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';
import '../../css/q/qn7ra9bpb.css';
import '../../css/r/rkzreok7b.css';
import '../../css/f/f6-18mutx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c25lkgbgb"/><path class="ca5b8gbur"/><path class="qn7ra9bpb"/><path class="rkzreok7b"/><path class="f6-18mutx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-minimalistic-broken"} {...others} />);
}

export default Component;
