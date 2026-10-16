import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwukm7kgl.css';
import '../../css/r/r9ka5cc6h.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hwukm7kgl"/><path class="r9ka5cc6h"/><path class="f5bqv3-2b"/><path class="ikpbwe38b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-alert-48"} {...others} />);
}

export default Component;
