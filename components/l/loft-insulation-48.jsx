import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/n/nljy2yb7v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="nljy2yb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:loft-insulation-48"} {...others} />);
}

export default Component;
