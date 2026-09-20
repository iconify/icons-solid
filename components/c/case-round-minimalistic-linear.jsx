import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';
import '../../css/k/kvdjm4bsr.css';
import '../../css/f/f6-18mutx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><path class="c25lkgbgb"/><path class="ca5b8gbur"/><path class="kvdjm4bsr"/><path class="f6-18mutx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-minimalistic-linear"} {...others} />);
}

export default Component;
