import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja2x0lp8m.css';
import '../../css/c/c6maefb_k.css';
import '../../css/r/ra0kfdc2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ja2x0lp8m"/><path class="c6maefb_k"/><path class="ra0kfdc2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shirt"} {...others} />);
}

export default Component;
