import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs9upekiu.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="bs9upekiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:gateway-parallel"} {...others} />);
}

export default Component;
