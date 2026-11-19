import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ag1nw1z.css';
import '../../css/v/v_cmgvbqv.css';
import '../../css/g/gj-2xib7l.css';
import '../../css/m/mke6xhgrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v2ag1nw1z"/><circle class="v_cmgvbqv"/><path class="gj-2xib7l"/><path class="mke6xhgrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microphone-vocal-off"} {...others} />);
}

export default Component;
