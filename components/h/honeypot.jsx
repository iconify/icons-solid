import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z04ljg-8d.css';
import '../../css/i/im9nhsffl.css';
import '../../css/d/dgzkl0b4y.css';
import '../../css/d/d4zc-cfcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z04ljg-8d"/><path clip-rule="evenodd" class="im9nhsffl"/><path class="dgzkl0b4y"/><path class="d4zc-cfcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:honeypot"} {...others} />);
}

export default Component;
