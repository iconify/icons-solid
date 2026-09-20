import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/furmtubab.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="furmtubab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:time-2"} {...others} />);
}

export default Component;
