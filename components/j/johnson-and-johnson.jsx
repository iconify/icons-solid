import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt3kvrv4y.css';

const viewBox = {"width":1000,"height":181.354};
const content = `<path class="rt3kvrv4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:johnson-and-johnson"} {...others} />);
}

export default Component;
