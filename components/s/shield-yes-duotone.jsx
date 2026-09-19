import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gk7xdgb3w.css';
import '../../css/a/anmzojybv.css';
import '../../css/w/wxjuyjb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gk7xdgb3w"/><path class="anmzojybv"/><path class="wxjuyjb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shield-yes-duotone"} {...others} />);
}

export default Component;
