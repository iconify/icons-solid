import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8u8ch62e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8u8ch62e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-arrow-to-right"} {...others} />);
}

export default Component;
