import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w25h46bvy.css';
import '../../css/f/fuqf47bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w25h46bvy"/><path class="fuqf47bsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:flag-chequered-filled"} {...others} />);
}

export default Component;
