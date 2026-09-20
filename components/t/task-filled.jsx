import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/t/tf_hn4bjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_hxwwbci"/><path class="tf_hn4bjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-filled"} {...others} />);
}

export default Component;
