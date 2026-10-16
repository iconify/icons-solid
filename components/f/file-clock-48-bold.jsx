import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yefgfcbum.css';
import '../../css/w/wp8j1tmrq.css';
import '../../css/r/rb9owibwy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yefgfcbum"/><path class="wp8j1tmrq"/><path class="rb9owibwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-clock-48-bold"} {...others} />);
}

export default Component;
