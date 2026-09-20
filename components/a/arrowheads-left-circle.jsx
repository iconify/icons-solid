import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1t22kb3w.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="w1t22kb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:arrowheads-left-circle"} {...others} />);
}

export default Component;
