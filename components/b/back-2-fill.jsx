import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk3mi57fy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk3mi57fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:back-2-fill"} {...others} />);
}

export default Component;
