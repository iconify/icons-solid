import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f__3z1bhu.css';
import '../../css/g/grgea9bwv.css';
import '../../css/n/nroycebvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f__3z1bhu"/><path class="grgea9bwv"/><path class="nroycebvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sluice-gate-20-bold"} {...others} />);
}

export default Component;
