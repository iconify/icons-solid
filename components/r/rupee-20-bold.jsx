import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt3s35byo.css';
import '../../css/u/uby7xibdw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rt3s35byo"/><path class="uby7xibdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rupee-20-bold"} {...others} />);
}

export default Component;
