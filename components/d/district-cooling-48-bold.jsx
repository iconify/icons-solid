import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0vjlubbx.css';
import '../../css/f/fp390_55c.css';
import '../../css/e/e7e9eebcd.css';
import '../../css/f/f5it5obaz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r0vjlubbx"/><path class="fp390_55c"/><path class="e7e9eebcd"/><path class="f5it5obaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-cooling-48-bold"} {...others} />);
}

export default Component;
