import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4-i4ybyx.css';
import '../../css/c/c98at3bul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4-i4ybyx"/><path class="c98at3bul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:check-square"} {...others} />);
}

export default Component;
