import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5a8yqb3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t5a8yqb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heavycheckmark"} {...others} />);
}

export default Component;
