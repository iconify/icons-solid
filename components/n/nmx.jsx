import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3wqznb4l.css';
import '../../css/d/d4j9nrbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3wqznb4l"/><path class="d4j9nrbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nmx"} {...others} />);
}

export default Component;
