import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e-6_wy83u.css';
import '../../css/m/myfgyn8nz.css';
import '../../css/c/ceohyg-cf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e-6_wy83u"/><path class="myfgyn8nz"/><path class="ceohyg-cf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-up-narrow-wide"} {...others} />);
}

export default Component;
