import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjjyz8b6u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vjjyz8b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-radio-button-off"} {...others} />);
}

export default Component;
