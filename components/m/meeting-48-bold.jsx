import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5ciubb6p.css';
import '../../css/i/iowuvxnvk.css';
import '../../css/r/rw-4knbut.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e5ciubb6p"/><path class="iowuvxnvk"/><path class="rw-4knbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:meeting-48-bold"} {...others} />);
}

export default Component;
