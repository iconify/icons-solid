import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly_hv7bof.css';
import '../../css/a/azjk1obih.css';
import '../../css/w/w13xa3b8t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ly_hv7bof"/><path class="azjk1obih"/><path class="w13xa3b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-play-48"} {...others} />);
}

export default Component;
