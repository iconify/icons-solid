import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxsj9xn3u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxsj9xn3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wink-smile-filled"} {...others} />);
}

export default Component;
