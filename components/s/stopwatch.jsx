import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6npdccvb.css';
import '../../css/f/f7yrgob5n.css';
import '../../css/r/rkd56vgis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6npdccvb"/><path class="f7yrgob5n"/><path clip-rule="evenodd" class="rkd56vgis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:stopwatch"} {...others} />);
}

export default Component;
