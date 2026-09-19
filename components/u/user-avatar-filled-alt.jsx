import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sulruw6qc.css';
import '../../css/g/glr1ycbdr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sulruw6qc"/><path class="glr1ycbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-avatar-filled-alt"} {...others} />);
}

export default Component;
