import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmcxk3v0s.css';
import '../../css/d/duthjibni.css';
import '../../css/l/l6lpb5bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kmcxk3v0s"/><path class="duthjibni"/><path class="l6lpb5bpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-search"} {...others} />);
}

export default Component;
