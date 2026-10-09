import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/b/bc_ez0bdz.css';
import '../../css/n/n4fi8-cmm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="bc_ez0bdz"/><path class="n4fi8-cmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:retrofit-48"} {...others} />);
}

export default Component;
