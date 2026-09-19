import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iohlvocdc.css';
import '../../css/l/lsqpyjwzm.css';
import '../../css/n/nkpeuec3f.css';
import '../../css/d/d461q1bsh.css';
import '../../css/i/izfv-wzfa.css';
import '../../css/j/jqrq48bfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="iohlvocdc"/><path class="lsqpyjwzm"/><path class="nkpeuec3f"/><path class="d461q1bsh"/><circle class="izfv-wzfa"/><circle class="jqrq48bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:transfer"} {...others} />);
}

export default Component;
