import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyv1v8bho.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="pyv1v8bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:bangladeshi-taka-sign"} {...others} />);
}

export default Component;
