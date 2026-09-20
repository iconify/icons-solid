import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d3nfmxgtj.css';
import '../../css/q/qs19yjd_r.css';
import '../../css/f/f-gpm8wwx.css';
import '../../css/y/ygnnld57d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d3nfmxgtj"/><path class="qs19yjd_r"/><path class="f-gpm8wwx"/><path class="ygnnld57d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-2-linear"} {...others} />);
}

export default Component;
