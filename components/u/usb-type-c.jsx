import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/swe9_5g2w.css';
import '../../css/d/dfbm7xnrc.css';
import '../../css/x/x4hdojbcw.css';
import '../../css/o/okjnj2ehc.css';
import '../../css/c/cnefw2bjl.css';
import '../../css/b/bj0qptb3a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="swe9_5g2w"/><path class="dfbm7xnrc"/><path class="x4hdojbcw"/><path class="okjnj2ehc"/><path class="cnefw2bjl"/><path class="bj0qptb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:usb-type-c"} {...others} />);
}

export default Component;
