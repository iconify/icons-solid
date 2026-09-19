import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwv1b8brk.css';
import '../../css/r/r9kyeodza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwv1b8brk"/><path class="r9kyeodza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-chev-right"} {...others} />);
}

export default Component;
