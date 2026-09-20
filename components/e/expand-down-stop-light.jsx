import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn4xu6bal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wn4xu6bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:expand-down-stop-light"} {...others} />);
}

export default Component;
