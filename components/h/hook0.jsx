import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzajeybua.css';
import '../../css/f/fcd9fub-m.css';
import '../../css/d/dd2zndbsg.css';
import '../../css/x/xukzidbcb.css';
import '../../css/t/tokuqsu-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tzajeybua"/><path class="fcd9fub-m"/><path class="dd2zndbsg"/><path class="xukzidbcb"/><path class="tokuqsu-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hook0"} {...others} />);
}

export default Component;
