import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqp1pnkkp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tqp1pnkkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:mxlinux"} {...others} />);
}

export default Component;
