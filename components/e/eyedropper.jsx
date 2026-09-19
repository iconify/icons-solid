import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywsqx8bpq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ywsqx8bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:eyedropper"} {...others} />);
}

export default Component;
