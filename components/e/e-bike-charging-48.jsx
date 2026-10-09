import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnz3mvvay.css';
import '../../css/a/alv82-bvd.css';
import '../../css/y/yjyk2ddya.css';
import '../../css/h/h6as5h2ht.css';
import '../../css/m/mpnwbubfi.css';
import '../../css/k/kdumj4nzh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gnz3mvvay"/><path class="alv82-bvd"/><path class="yjyk2ddya"/><path class="h6as5h2ht"/><path class="mpnwbubfi"/><path class="kdumj4nzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-bike-charging-48"} {...others} />);
}

export default Component;
