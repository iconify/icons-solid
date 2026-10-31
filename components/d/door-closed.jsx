import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfkh4bc1s.css';
import '../../css/r/rabduxs0v.css';
import '../../css/t/tssac15xg.css';
import '../../css/m/m52asm4vq.css';
import '../../css/c/crh8rma2c.css';
import '../../css/s/sx9ze7bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yfkh4bc1s"/><path class="rabduxs0v wm-k"/><path class="tssac15xg wm-k"/><path class="m52asm4vq wm-shadow"/><path class="crh8rma2c wm-shine"/><path class="sx9ze7bqc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:door-closed"} {...others} />);
}

export default Component;
