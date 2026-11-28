import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9zc6b42h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9zc6b42h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:calendar-arrow-right"} {...others} />);
}

export default Component;
