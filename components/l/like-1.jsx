import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd5_n25wn.css';
import '../../css/f/fau-rwx9l.css';
import '../../css/s/sr62qfbbl.css';
import '../../css/f/f1a5py3hc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cd5_n25wn"/><path class="fau-rwx9l"/><path class="sr62qfbbl"/><path class="f1a5py3hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:like-1"} {...others} />);
}

export default Component;
