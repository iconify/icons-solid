import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n659w1b0d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n659w1b0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bsam-qsam-zedc"} {...others} />);
}

export default Component;
