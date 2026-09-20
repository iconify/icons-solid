import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix4knfb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ix4knfb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:switch-fill"} {...others} />);
}

export default Component;
