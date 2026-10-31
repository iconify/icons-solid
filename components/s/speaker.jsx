import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h-6_tyerc.css';
import '../../css/d/dszt59b8o.css';
import '../../css/g/gxlsu37_r.css';
import '../../css/t/tjoozvtpj.css';
import '../../css/p/px_fc8box.css';
import '../../css/o/o7c_g2bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="h-6_tyerc wm-shadow"/><path class="dszt59b8o"/><path class="gxlsu37_r"/><path class="tjoozvtpj"/><path class="px_fc8box"/><path class="o7c_g2bxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:speaker"} {...others} />);
}

export default Component;
