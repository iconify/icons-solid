import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve8e1pbig.css';
import '../../css/q/q9tg-bclv.css';
import '../../css/t/tuhu0nbbx.css';
import '../../css/n/niybyjbpm.css';
import '../../css/q/qtln9nbsk.css';
import '../../css/e/eflprlb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ve8e1pbig wm-k"/><path class="q9tg-bclv wm-k"/><path class="tuhu0nbbx wm-k"/><path class="niybyjbpm wm-k"/><path class="qtln9nbsk wm-shine"/><path class="eflprlb-x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:gingerbread-man"} {...others} />);
}

export default Component;
