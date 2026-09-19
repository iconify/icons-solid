import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er27m0b0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er27m0b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-caret-up-circle"} {...others} />);
}

export default Component;
