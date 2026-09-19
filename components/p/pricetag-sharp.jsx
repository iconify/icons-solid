import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_mr8vw2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_mr8vw2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:pricetag-sharp"} {...others} />);
}

export default Component;
