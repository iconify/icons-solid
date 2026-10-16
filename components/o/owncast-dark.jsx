import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir2n3xb_u.css';

const viewBox = {"width":96,"height":105};
const content = `<path class="ir2n3xb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:owncast-dark"} {...others} />);
}

export default Component;
