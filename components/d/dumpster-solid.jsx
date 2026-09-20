import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmn4a1b8k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fmn4a1b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:dumpster-solid"} {...others} />);
}

export default Component;
