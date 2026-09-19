import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybps4ubau.css';
import '../../css/s/sh39ly0gc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ybps4ubau"/><path class="sh39ly0gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-cricket-ball"} {...others} />);
}

export default Component;
