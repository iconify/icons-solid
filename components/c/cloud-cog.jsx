import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g6usabamn.css';
import '../../css/j/jqh_sbbmw.css';
import '../../css/e/erzu7pb2n.css';
import '../../css/u/uvups9wey.css';
import '../../css/b/bd7t9wz8u.css';
import '../../css/e/e3njzubqz.css';
import '../../css/v/ve9lpr-8e.css';
import '../../css/y/y_f5v3kqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g6usabamn wm-shadow"/><path class="jqh_sbbmw wm-s"/><path class="erzu7pb2n wm-shadow"/><path class="uvups9wey"/><path class="bd7t9wz8u"/><path class="e3njzubqz wm-s"/><path class="ve9lpr-8e wm-s"/><path class="wm-s y_f5v3kqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-cog"} {...others} />);
}

export default Component;
