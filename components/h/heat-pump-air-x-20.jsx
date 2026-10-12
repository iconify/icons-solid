import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0roxubvm.css';
import '../../css/q/qnea9bsmy.css';
import '../../css/j/j6cyu6bqi.css';
import '../../css/p/p-qkgzbzb.css';
import '../../css/k/k_yv9qbfm.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/j/j2_uc6brw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o0roxubvm"/><path class="qnea9bsmy"/><path class="j6cyu6bqi"/><path class="p-qkgzbzb"/><path class="k_yv9qbfm"/><path class="lzmnrrp8b"/><path class="j2_uc6brw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-x-20"} {...others} />);
}

export default Component;
