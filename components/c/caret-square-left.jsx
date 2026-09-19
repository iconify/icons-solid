import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ury1xy_5q.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ury1xy_5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:caret-square-left"} {...others} />);
}

export default Component;
