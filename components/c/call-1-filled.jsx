import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy3525bwm.css';
import '../../css/d/d7q3yfbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy3525bwm"/><path class="d7q3yfbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:call-1-filled"} {...others} />);
}

export default Component;
