import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_q5-s7-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f_q5-s7-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:bulb-refresh"} {...others} />);
}

export default Component;
