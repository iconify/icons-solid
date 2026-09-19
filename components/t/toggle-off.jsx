import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vws3t-8ts.css';

const viewBox = {"width":2048,"height":1280};
const content = `<path class="vws3t-8ts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:toggle-off"} {...others} />);
}

export default Component;
