import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acta6bcsg.css';
import '../../css/w/wzzdjdmsm.css';
import '../../css/l/lv9es-bsm.css';
import '../../css/p/pqeaocwmq.css';
import '../../css/k/k4pu50bhp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="acta6bcsg"/><path class="wzzdjdmsm"/><path class="lv9es-bsm"/><path class="pqeaocwmq"/><path class="k4pu50bhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crossed-swords"} {...others} />);
}

export default Component;
