import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lt5xwl8wq.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/c/c21i8ub3b.css';
import '../../css/c/cjoi-wios.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lt5xwl8wq wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="c21i8ub3b wm-k"/><path class="cjoi-wios wm-a"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-off-blueprint"} {...others} />);
}

export default Component;
