import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eh9c86bzm.css';
import '../../css/q/qgj3uiscg.css';
import '../../css/g/g92qnxb9i.css';
import '../../css/h/ho0rl5ler.css';
import '../../css/q/qidc0bqma.css';
import '../../css/v/vf3ffacsb.css';
import '../../css/i/i9wc7sfgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="eh9c86bzm"/><path class="qgj3uiscg"/><path class="g92qnxb9i"/><circle transform="rotate(90 8.25 19.11)" class="ho0rl5ler"/><circle transform="rotate(90 17.27 19.11)" class="qidc0bqma"/><rect class="vf3ffacsb"/><path class="i9wc7sfgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:trolley"} {...others} />);
}

export default Component;
