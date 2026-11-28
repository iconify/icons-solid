import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9by2ub1z.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/ryf9-cbba.css';
import '../../css/s/s_4n11k-r.css';
import '../../css/x/x772mmbtf.css';
import '../../css/e/e3p8-oh0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9by2ub1z secondary"/><g class="dt0cm9dhy primary"><path class="ryf9-cbba"/><path class="s_4n11k-r"/><path class="x772mmbtf"/><path class="e3p8-oh0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:screwdriver-duo"} {...others} />);
}

export default Component;
