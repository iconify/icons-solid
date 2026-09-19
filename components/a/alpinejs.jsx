import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-11jrk6e.css';
import '../../css/z/zx7fs7byh.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="j-11jrk6e"/><path clip-rule="evenodd" class="zx7fs7byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:alpinejs"} {...others} />);
}

export default Component;
