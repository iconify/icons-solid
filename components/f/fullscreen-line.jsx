import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhp8iwb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhp8iwb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fullscreen-line"} {...others} />);
}

export default Component;
