import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3oyjbb4p.css';
import '../../css/e/e56i_o0sr.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="j3oyjbb4p"/><path class="e56i_o0sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:usb-cable-solid"} {...others} />);
}

export default Component;
