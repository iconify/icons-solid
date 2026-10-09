import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5yx1ibtg.css';
import '../../css/f/fostv5aqj.css';
import '../../css/d/dg_f4ibgg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p5yx1ibtg"/><path class="fostv5aqj"/><path class="dg_f4ibgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-right-48"} {...others} />);
}

export default Component;
