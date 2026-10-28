import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jum5qfbhb.css';
import '../../css/q/qe6o9rb7v.css';
import '../../css/k/khluz147i.css';
import '../../css/n/nlgevhjxn.css';
import '../../css/z/z94k-_m9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jum5qfbhb"/><path class="qe6o9rb7v"/><path class="khluz147i"/><circle transform="rotate(-90 17.98 18.67)" class="nlgevhjxn"/><path class="z94k-_m9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-settings"} {...others} />);
}

export default Component;
