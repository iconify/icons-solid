import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prrieubjn.css';
import '../../css/o/o1dca9b1x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="prrieubjn"/><path class="o1dca9b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-20"} {...others} />);
}

export default Component;
