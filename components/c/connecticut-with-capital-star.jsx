import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwowx4blk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vwowx4blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:connecticut-with-capital-star"} {...others} />);
}

export default Component;
