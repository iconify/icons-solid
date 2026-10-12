import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r961dwb-b.css';
import '../../css/u/ulqrzxjer.css';
import '../../css/w/wmrfpsbbx.css';
import '../../css/f/fnjlcibvd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r961dwb-b"/><path class="ulqrzxjer"/><path class="wmrfpsbbx"/><path class="fnjlcibvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roundabout-48-bold"} {...others} />);
}

export default Component;
