import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcjleqbuo.css';
import '../../css/m/mbp5jpbcb.css';
import '../../css/n/n9dq_s7zi.css';
import '../../css/z/z-10p7bqm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qcjleqbuo"/><path clip-rule="evenodd" class="mbp5jpbcb"/><path class="n9dq_s7zi"/><path clip-rule="evenodd" class="z-10p7bqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-cli-outline"} {...others} />);
}

export default Component;
