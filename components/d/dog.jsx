import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kx87pvbnb.css';
import '../../css/v/vhpjnr_lv.css';
import '../../css/k/kpahkbbpx.css';
import '../../css/o/oh96srbus.css';
import '../../css/t/t378gbehq.css';
import '../../css/k/k946zmboj.css';
import '../../css/r/rg21mtbyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kx87pvbnb"/><path class="vhpjnr_lv"/><circle class="kpahkbbpx"/><circle class="oh96srbus"/><path class="t378gbehq"/><path class="k946zmboj"/><path class="rg21mtbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dog"} {...others} />);
}

export default Component;
