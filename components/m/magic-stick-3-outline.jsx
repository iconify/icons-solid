import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hf-y99bwn.css';
import '../../css/l/l0ri_ebvl.css';
import '../../css/l/l3jxn7n1d.css';
import '../../css/u/u9a10ibrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hf-y99bwn"/><path class="l0ri_ebvl"/><path class="l3jxn7n1d"/><path class="u9a10ibrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-stick-3-outline"} {...others} />);
}

export default Component;
