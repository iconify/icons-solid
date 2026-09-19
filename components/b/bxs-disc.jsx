import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn3dr3d8s.css';
import '../../css/l/l5yoditpm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn3dr3d8s"/><circle class="l5yoditpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-disc"} {...others} />);
}

export default Component;
