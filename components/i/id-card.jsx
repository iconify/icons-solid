import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roek0__-b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="roek0__-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:id-card"} {...others} />);
}

export default Component;
