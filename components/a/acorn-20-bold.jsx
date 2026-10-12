import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gozz3nbxj.css';
import '../../css/m/mwkd_0bba.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gozz3nbxj"/><path class="mwkd_0bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:acorn-20-bold"} {...others} />);
}

export default Component;
