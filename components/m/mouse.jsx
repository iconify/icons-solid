import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnh6lfzed.css';
import '../../css/w/wax2jmrhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnh6lfzed"/><path class="wax2jmrhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:mouse"} {...others} />);
}

export default Component;
