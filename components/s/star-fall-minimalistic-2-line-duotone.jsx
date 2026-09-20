import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d3nfmxgtj.css';
import '../../css/u/uclwl6b-i.css';
import '../../css/j/jlohwpuwe.css';
import '../../css/d/dq__t9bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d3nfmxgtj"/><path class="uclwl6b-i"/><path class="jlohwpuwe"/><path class="dq__t9bnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-2-line-duotone"} {...others} />);
}

export default Component;
