import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4q8hjbxf.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="f4q8hjbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:grid-three-up"} {...others} />);
}

export default Component;
