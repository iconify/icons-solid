import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhvn1ybkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhvn1ybkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:vector-group-line"} {...others} />);
}

export default Component;
