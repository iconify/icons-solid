import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smx10x8rd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smx10x8rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-alarm-exclamation"} {...others} />);
}

export default Component;
