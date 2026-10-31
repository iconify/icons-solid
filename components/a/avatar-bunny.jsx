import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/knzlu0bwq.css';
import '../../css/m/mk_fh03mk.css';
import '../../css/p/p37h0znlz.css';
import '../../css/u/udv_8nb_o.css';
import '../../css/a/azpckrb5z.css';
import '../../css/o/om1s17bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="knzlu0bwq wm-shadow"/><path class="mk_fh03mk"/><path class="p37h0znlz"/><path class="udv_8nb_o"/><path class="azpckrb5z"/><path class="om1s17bdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-bunny"} {...others} />);
}

export default Component;
