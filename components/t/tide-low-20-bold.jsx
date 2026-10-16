import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qghjcac2i.css';
import '../../css/s/smcke3big.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qghjcac2i"/><path class="smcke3big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-low-20-bold"} {...others} />);
}

export default Component;
