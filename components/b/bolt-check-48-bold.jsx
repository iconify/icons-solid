import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4crdmbww.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/r/r5d58utxk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j4crdmbww"/><path class="hwjgqrbah"/><path class="r5d58utxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-check-48-bold"} {...others} />);
}

export default Component;
