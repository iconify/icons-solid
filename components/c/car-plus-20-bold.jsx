import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9032gb0e.css';
import '../../css/y/yw5vbabhn.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/k/kkgg5c00l.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f9032gb0e"/><path class="yw5vbabhn"/><path class="aqsnv9bnd"/><path class="kkgg5c00l"/><path class="hayl1lfmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-plus-20-bold"} {...others} />);
}

export default Component;
