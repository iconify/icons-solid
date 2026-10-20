import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g--bxo5in.css';
import '../../css/x/xxzut0e2z.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g--bxo5in"/><path class="xxzut0e2z"/><path class="qh3-d7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-check-20"} {...others} />);
}

export default Component;
