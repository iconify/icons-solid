import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5qe6qp3w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x5qe6qp3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:element-picker"} {...others} />);
}

export default Component;
