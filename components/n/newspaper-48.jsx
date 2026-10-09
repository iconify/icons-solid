import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg0vzvbzz.css';
import '../../css/r/r2tsl51tj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vg0vzvbzz"/><path class="r2tsl51tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:newspaper-48"} {...others} />);
}

export default Component;
