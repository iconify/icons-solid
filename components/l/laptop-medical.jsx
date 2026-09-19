import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8v2597ot.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="r8v2597ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:laptop-medical"} {...others} />);
}

export default Component;
