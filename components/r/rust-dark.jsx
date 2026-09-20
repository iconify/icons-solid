import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/squnhsb2r.css';

const viewBox = {"width":224,"height":224};
const content = `<path class="squnhsb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rust-dark"} {...others} />);
}

export default Component;
