import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lh4ximboh.css';
import '../../css/l/lk9w6fb3r.css';
import '../../css/j/jzx63eb_y.css';
import '../../css/x/xw85vjb7b.css';
import '../../css/z/zbgyb8bwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lh4ximboh wm-k"/><path class="lk9w6fb3r wm-a"/><path class="jzx63eb_y wm-shadow"/><path class="wm-k xw85vjb7b"/><path class="wm-a zbgyb8bwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-moon-engrave"} {...others} />);
}

export default Component;
