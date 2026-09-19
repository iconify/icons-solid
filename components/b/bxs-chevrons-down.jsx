import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n185p7bwm.css';
import '../../css/i/iylza4btn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n185p7bwm"/><path class="iylza4btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chevrons-down"} {...others} />);
}

export default Component;
