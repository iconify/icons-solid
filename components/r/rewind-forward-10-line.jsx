import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6dew0bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6dew0bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rewind-forward-10-line"} {...others} />);
}

export default Component;
