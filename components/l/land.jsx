import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2ol84b2g.css';
import '../../css/i/iwbhjtb_d.css';
import '../../css/f/f4fekj7yf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2ol84b2g"/><path class="iwbhjtb_d"/><path class="f4fekj7yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:land"} {...others} />);
}

export default Component;
