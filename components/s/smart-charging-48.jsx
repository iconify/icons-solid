import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzvl6-gkr.css';
import '../../css/x/x-s9mn_cg.css';
import '../../css/r/r83jtnbma.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nzvl6-gkr"/><path class="x-s9mn_cg"/><path class="r83jtnbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-charging-48"} {...others} />);
}

export default Component;
