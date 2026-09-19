import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3fptrb1o.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="t3fptrb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:user-graduate"} {...others} />);
}

export default Component;
