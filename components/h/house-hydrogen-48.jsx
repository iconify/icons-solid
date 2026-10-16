import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/v/vt4p30p5y.css';
import '../../css/w/w9q5sgb9g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="vt4p30p5y"/><path class="w9q5sgb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-hydrogen-48"} {...others} />);
}

export default Component;
