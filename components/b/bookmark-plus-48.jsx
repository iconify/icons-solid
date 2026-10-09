import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsiaoacww.css';
import '../../css/p/pe35xebhe.css';
import '../../css/u/um7q16f0g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fsiaoacww"/><path class="pe35xebhe"/><path class="um7q16f0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bookmark-plus-48"} {...others} />);
}

export default Component;
