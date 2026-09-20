import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m97iylbud.css';
import '../../css/y/yhggpq7zf.css';
import '../../css/k/k8te4qbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="m97iylbud"/><path class="yhggpq7zf"/><path class="k8te4qbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:unlock-sharp-two-tone"} {...others} />);
}

export default Component;
