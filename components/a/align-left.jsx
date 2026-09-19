import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8y7n0fxr.css';

const viewBox = {"width":384,"height":448};
const content = `<path class="a8y7n0fxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:align-left"} {...others} />);
}

export default Component;
