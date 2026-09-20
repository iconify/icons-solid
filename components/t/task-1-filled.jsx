import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/c/c74g0s1af.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_hxwwbci"/><path class="c74g0s1af"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-1-filled"} {...others} />);
}

export default Component;
