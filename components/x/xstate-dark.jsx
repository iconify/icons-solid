import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0hb7q3gd.css';

const viewBox = {"width":800,"height":405};
const content = `<path class="d0hb7q3gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:xstate-dark"} {...others} />);
}

export default Component;
