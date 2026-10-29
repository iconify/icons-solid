import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l4wrd57_f.css';
import '../../css/t/t_qq9wb5b.css';
import '../../css/z/za0qrbr5b.css';
import '../../css/q/qtot5zs0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l4wrd57_f wm-k"/><path class="t_qq9wb5b wm-a"/><path class="wm-k za0qrbr5b"/><path class="qtot5zs0c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tent-sketch"} {...others} />);
}

export default Component;
