import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko2bjacnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko2bjacnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:moon-first-quarter"} {...others} />);
}

export default Component;
