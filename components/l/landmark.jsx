import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hise5gb9x.css';
import '../../css/b/bktrjnn5f.css';
import '../../css/v/vv4lo6b2m.css';
import '../../css/n/nvwd6n36m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hise5gb9x"/><path class="bktrjnn5f"/><path class="vv4lo6b2m"/><path class="nvwd6n36m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:landmark"} {...others} />);
}

export default Component;
