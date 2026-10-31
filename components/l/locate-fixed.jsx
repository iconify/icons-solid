import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k2tmhbc7k.css';
import '../../css/y/yuoi656tt.css';
import '../../css/w/wijmmnbcb.css';
import '../../css/f/fw6wdobuc.css';
import '../../css/q/q9-qsojcc.css';
import '../../css/y/y58gf5blg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k2tmhbc7k wm-shadow"/><path class="yuoi656tt"/><path class="wijmmnbcb"/><path class="fw6wdobuc"/><path class="q9-qsojcc"/><path class="y58gf5blg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:locate-fixed"} {...others} />);
}

export default Component;
