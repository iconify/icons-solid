import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7jaf7bps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q7jaf7bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-gemini-solid"} {...others} />);
}

export default Component;
