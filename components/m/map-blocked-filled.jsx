import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlfrtxgac.css';
import '../../css/v/vkk5k5byr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlfrtxgac"/><path class="vkk5k5byr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-blocked-filled"} {...others} />);
}

export default Component;
