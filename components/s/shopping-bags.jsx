import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtv04jbdb.css';
import '../../css/q/qrn48nibf.css';
import '../../css/v/vhiwtnr1h.css';
import '../../css/z/zw4zflb5j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dtv04jbdb"/><path class="qrn48nibf"/><path class="vhiwtnr1h"/><path class="zw4zflb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shopping-bags"} {...others} />);
}

export default Component;
