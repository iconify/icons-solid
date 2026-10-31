import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9im-ib6f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j9im-ib6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:thatched-building-with-window"} {...others} />);
}

export default Component;
