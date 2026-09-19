import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv33s8bwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jv33s8bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:equalizer"} {...others} />);
}

export default Component;
