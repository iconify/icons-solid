import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/meik4yazj.css';
import '../../css/t/tqk7n6bfj.css';
import '../../css/w/wjkv1_b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="meik4yazj"/><path class="tqk7n6bfj"/><path class="wjkv1_b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment-check"} {...others} />);
}

export default Component;
