import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng8s96spv.css';
import '../../css/z/z6wwtxb3i.css';
import '../../css/x/x94l9_bfe.css';
import '../../css/i/io-f5ccfn.css';

const viewBox = {"width":266,"height":266};
const content = `<g class="ft5dv1b6b"><circle class="ng8s96spv"/><path class="z6wwtxb3i"/><path class="x94l9_bfe"/><path class="io-f5ccfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:shiki"} {...others} />);
}

export default Component;
