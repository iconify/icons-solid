import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/m/m4fm11vel.css';
import '../../css/e/ezy_p22ip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_hxwwbci"/><path class="m4fm11vel"/><path class="ezy_p22ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-time-filled"} {...others} />);
}

export default Component;
