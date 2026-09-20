import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-v8mpunh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-v8mpunh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:square-rounded-badge"} {...others} />);
}

export default Component;
