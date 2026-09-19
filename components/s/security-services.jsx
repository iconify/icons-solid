import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aik43r5pi.css';
import '../../css/j/jvytmhb2i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aik43r5pi"/><path class="jvytmhb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:security-services"} {...others} />);
}

export default Component;
