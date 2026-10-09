import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4m--tbpp.css';
import '../../css/i/ijgbmtb8w.css';
import '../../css/f/fiqktq5gi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v4m--tbpp"/><path class="ijgbmtb8w"/><path class="fiqktq5gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-lay-vessel-48"} {...others} />);
}

export default Component;
