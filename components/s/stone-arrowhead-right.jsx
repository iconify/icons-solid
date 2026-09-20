import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjl1wbc5q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pjl1wbc5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:stone-arrowhead-right"} {...others} />);
}

export default Component;
