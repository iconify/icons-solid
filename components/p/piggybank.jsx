import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_xpt-d8k.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="b_xpt-d8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:piggybank"} {...others} />);
}

export default Component;
