import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooi-1y4um.css';
import '../../css/b/bk49d_bmy.css';
import '../../css/g/gm54u39ws.css';
import '../../css/l/ljz6bzfuv.css';
import '../../css/v/vbehv01rc.css';
import '../../css/n/n8nczbbdk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ooi-1y4um"/><path class="bk49d_bmy"/><circle class="gm54u39ws"/><circle class="ljz6bzfuv"/><path class="vbehv01rc"/><path class="n8nczbbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:television"} {...others} />);
}

export default Component;
