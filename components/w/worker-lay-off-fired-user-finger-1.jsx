import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2zg9ebee.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j2zg9ebee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:worker-lay-off-fired-user-finger-1"} {...others} />);
}

export default Component;
