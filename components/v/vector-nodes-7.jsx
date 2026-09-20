import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owo7uxusz.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="owo7uxusz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:vector-nodes-7"} {...others} />);
}

export default Component;
