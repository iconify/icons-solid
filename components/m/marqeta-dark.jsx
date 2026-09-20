import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz4yn8bbc.css';

const viewBox = {"width":553.38,"height":78.93};
const content = `<path class="xz4yn8bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:marqeta-dark"} {...others} />);
}

export default Component;
