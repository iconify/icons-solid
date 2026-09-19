import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnx-vib2x.css';
import '../../css/y/yc146_bio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnx-vib2x"/><path class="yc146_bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-message-rounded-edit"} {...others} />);
}

export default Component;
