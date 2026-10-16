import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u95e4sw8e.css';
import '../../css/l/la89sqemp.css';
import '../../css/d/d1s4subwc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u95e4sw8e"/><path class="la89sqemp"/><path class="d1s4subwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-copy-48-bold"} {...others} />);
}

export default Component;
