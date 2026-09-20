import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7dy5yb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7dy5yb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pause-circle-fill"} {...others} />);
}

export default Component;
