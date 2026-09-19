import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dccnkcb-b.css';
import '../../css/t/tkjsm9b-m.css';
import '../../css/g/gxwvkccae.css';
import '../../css/i/ikv4mwb_l.css';
import '../../css/x/x4lu_pb5s.css';
import '../../css/l/l4j6vnbos.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dccnkcb-b"/><path class="tkjsm9b-m"/><path class="gxwvkccae"/><path class="ikv4mwb_l"/><path class="x4lu_pb5s"/><path class="l4j6vnbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:abacus"} {...others} />);
}

export default Component;
