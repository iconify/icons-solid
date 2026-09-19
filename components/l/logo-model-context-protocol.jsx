import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixx4r3bui.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ixx4r3bui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-model-context-protocol"} {...others} />);
}

export default Component;
