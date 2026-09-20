import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8eh7n5jh.css';
import '../../css/j/j7h15zsik.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d8eh7n5jh"/><path class="j7h15zsik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-shield-wall"} {...others} />);
}

export default Component;
