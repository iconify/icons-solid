import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qpun4616z.css';
import '../../css/w/wu6jc3b7c.css';
import '../../css/y/y5xiktb0u.css';
import '../../css/w/wpztunb3a.css';
import '../../css/l/l4ok05b1o.css';
import '../../css/m/m-tk-vb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qpun4616z"/><path class="wu6jc3b7c"/><path class="wm-shine y5xiktb0u"/><path class="wm-k wpztunb3a"/><path class="l4ok05b1o wm-a"/><path class="m-tk-vb8r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:newspaper"} {...others} />);
}

export default Component;
