import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9og61b7p.css';
import '../../css/y/yftb-1bif.css';
import '../../css/p/pzgm9abmy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x9og61b7p"/><path class="yftb-1bif"/><path class="pzgm9abmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydraulic-cylinder-48"} {...others} />);
}

export default Component;
