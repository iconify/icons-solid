import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5wi-ryfk.css';
import '../../css/d/dtfkzwyic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5wi-ryfk"/><path class="dtfkzwyic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:alarm"} {...others} />);
}

export default Component;
