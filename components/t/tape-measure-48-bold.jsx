import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8g73tbef.css';
import '../../css/k/kui6b9bke.css';
import '../../css/y/yzh_ltb0d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u8g73tbef"/><path class="kui6b9bke"/><path class="yzh_ltb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tape-measure-48-bold"} {...others} />);
}

export default Component;
