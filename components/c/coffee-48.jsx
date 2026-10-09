import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfg1jelsz.css';
import '../../css/f/fec_ntl8c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pfg1jelsz"/><path class="fec_ntl8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-48"} {...others} />);
}

export default Component;
