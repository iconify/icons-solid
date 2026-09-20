import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5vf79bby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5vf79bby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rewind-forward-square-15-fill"} {...others} />);
}

export default Component;
