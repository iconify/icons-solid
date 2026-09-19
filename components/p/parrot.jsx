import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1crgvb3e.css';
import '../../css/t/t694e9bfw.css';

const viewBox = {"width":375,"height":512};
const content = `<path class="s1crgvb3e"/><path class="t694e9bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:parrot"} {...others} />);
}

export default Component;
