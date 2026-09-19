import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr1sutbfj.css';
import '../../css/l/ll09ir12a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vr1sutbfj"/><path class="ll09ir12a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:fitness"} {...others} />);
}

export default Component;
