import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vng_kgbvl.css';
import '../../css/k/ke73g8b7v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vng_kgbvl"/><path class="ke73g8b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-efficiency-20"} {...others} />);
}

export default Component;
