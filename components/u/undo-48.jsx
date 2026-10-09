import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvh346bsa.css';
import '../../css/k/kqy72r22k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uvh346bsa"/><path class="kqy72r22k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:undo-48"} {...others} />);
}

export default Component;
