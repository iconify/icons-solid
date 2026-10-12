import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wibsj_byf.css';
import '../../css/w/w303u3a6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wibsj_byf"/><path class="w303u3a6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:penguin-48"} {...others} />);
}

export default Component;
