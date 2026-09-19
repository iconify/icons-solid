import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0v0s9b_d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s0v0s9b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-footnote"} {...others} />);
}

export default Component;
