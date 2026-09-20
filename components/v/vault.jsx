import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/l/le5satbnh.css';
import '../../css/e/e0nwtzb8d.css';
import '../../css/u/ujsp5sb0k.css';
import '../../css/u/u7luzfbhx.css';
import '../../css/a/alf6uubgl.css';
import '../../css/e/evpupm86m.css';
import '../../css/m/mc5kpcw0w.css';
import '../../css/f/f_kvegjgq.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="jhxi-trnl"/><circle class="le5satbnh"/><path class="e0nwtzb8d"/><circle class="ujsp5sb0k"/><path class="u7luzfbhx"/><circle class="alf6uubgl"/><path class="evpupm86m"/><circle class="mc5kpcw0w"/><path class="f_kvegjgq"/><circle class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:vault"} {...others} />);
}

export default Component;
