import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zfn_heb_z.css';
import '../../css/m/m65mk-ths.css';
import '../../css/q/q_s4rbbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zfn_heb_z"/><path class="m65mk-ths"/><path class="q_s4rbbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:npm-square"} {...others} />);
}

export default Component;
