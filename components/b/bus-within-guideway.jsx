import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9xqpqhsp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w9xqpqhsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bus-within-guideway"} {...others} />);
}

export default Component;
