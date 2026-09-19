import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-xk_ruej.css';
import '../../css/y/yiz97dbjs.css';
import '../../css/l/ldaz7_bsh.css';
import '../../css/h/h2s924byy.css';
import '../../css/g/g07dr6bbn.css';
import '../../css/n/nndxyclzt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k-xk_ruej"/><path class="yiz97dbjs"/><path class="ldaz7_bsh"/><path class="h2s924byy"/><path class="g07dr6bbn"/><path class="nndxyclzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pouting"} {...others} />);
}

export default Component;
