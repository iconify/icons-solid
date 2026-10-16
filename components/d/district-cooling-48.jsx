import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-w9aygjv.css';
import '../../css/q/qi1bdrbze.css';
import '../../css/a/afvmi23hj.css';
import '../../css/g/gfyoxoo-z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l-w9aygjv"/><path class="qi1bdrbze"/><path class="afvmi23hj"/><path class="gfyoxoo-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-cooling-48"} {...others} />);
}

export default Component;
