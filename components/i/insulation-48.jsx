import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/n/nooi5tb7g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="nooi5tb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulation-48"} {...others} />);
}

export default Component;
