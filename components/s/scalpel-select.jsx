import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rizmdybhn.css';
import '../../css/v/vfm45qp2i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rizmdybhn"/><path class="vfm45qp2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:scalpel-select"} {...others} />);
}

export default Component;
