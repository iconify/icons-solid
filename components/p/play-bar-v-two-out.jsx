import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcr7icbza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcr7icbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:play-bar-v-two-out"} {...others} />);
}

export default Component;
