import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vim6mcbhb.css';
import '../../css/h/hndh_kb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vim6mcbhb"/><path clip-rule="evenodd" class="hndh_kb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:android-outline"} {...others} />);
}

export default Component;
