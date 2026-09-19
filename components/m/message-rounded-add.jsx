import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnx-vib2x.css';
import '../../css/f/fbrtfx9pu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnx-vib2x"/><path class="fbrtfx9pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-rounded-add"} {...others} />);
}

export default Component;
