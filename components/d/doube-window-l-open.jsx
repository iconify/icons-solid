import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g88ua1b-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g88ua1b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:doube-window-l-open"} {...others} />);
}

export default Component;
