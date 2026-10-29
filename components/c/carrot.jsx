import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6m50-b-z.css';
import '../../css/e/ej4c3difb.css';
import '../../css/x/xzj-w-bop.css';
import '../../css/q/qmbcfvb0p.css';
import '../../css/p/p908s9ikx.css';
import '../../css/k/ke8qs_jaw.css';
import '../../css/t/typybgilp.css';
import '../../css/c/cn58ypbqa.css';
import '../../css/l/lfcpy426f.css';
import '../../css/h/hrskbijkq.css';
import '../../css/j/jfic3dbib.css';
import '../../css/w/wp2d3-5ji.css';
import '../../css/z/z0tr_hl5m.css';
import '../../css/e/ez45_flcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6m50-b-z wm-shadow"/><path class="ej4c3difb wm-a"/><path class="wm-a xzj-w-bop"/><path class="qmbcfvb0p wm-a"/><path class="p908s9ikx wm-a"/><path class="ke8qs_jaw wm-a"/><path class="typybgilp wm-a"/><path class="cn58ypbqa wm-k"/><path class="lfcpy426f wm-k"/><path class="hrskbijkq wm-k"/><path class="jfic3dbib wm-k"/><path class="wm-shine wp2d3-5ji"/><path class="wm-k z0tr_hl5m"/><path class="ez45_flcb wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:carrot"} {...others} />);
}

export default Component;
