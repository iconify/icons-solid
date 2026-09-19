import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz98m2akc.css';
import '../../css/k/kbbue1bxu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mz98m2akc"/><path class="kbbue1bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bus-sharp"} {...others} />);
}

export default Component;
