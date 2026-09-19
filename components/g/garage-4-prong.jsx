import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhx1jm7tb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhx1jm7tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:garage-4-prong"} {...others} />);
}

export default Component;
