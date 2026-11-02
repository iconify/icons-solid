import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la7fppbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la7fppbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:map-pin-plus-inside-fill"} {...others} />);
}

export default Component;
