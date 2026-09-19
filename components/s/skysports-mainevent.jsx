import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbu0xac7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jbu0xac7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:skysports-mainevent"} {...others} />);
}

export default Component;
