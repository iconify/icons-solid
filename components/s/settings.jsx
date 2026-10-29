import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz7mk2bao.css';
import '../../css/l/lph6ocbws.css';
import '../../css/n/nmwir6o8y.css';
import '../../css/u/upnd6rx5v.css';
import '../../css/q/qro69npir.css';
import '../../css/a/asadueb_x.css';
import '../../css/p/p7hp70fot.css';
import '../../css/r/ryonw8prp.css';
import '../../css/d/dfek47ggf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nz7mk2bao wm-shadow"/><path class="lph6ocbws wm-k"/><path class="nmwir6o8y wm-k"/><path class="upnd6rx5v wm-k"/><path class="qro69npir wm-k"/><path class="asadueb_x wm-k"/><path class="p7hp70fot wm-shine"/><path class="ryonw8prp wm-a"/><path class="dfek47ggf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:settings"} {...others} />);
}

export default Component;
