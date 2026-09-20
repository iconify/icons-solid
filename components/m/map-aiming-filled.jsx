import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm1o5wb2q.css';
import '../../css/n/n5z0o6g9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm1o5wb2q"/><path class="n5z0o6g9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-aiming-filled"} {...others} />);
}

export default Component;
