import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuf07w3fy.css';
import '../../css/j/jnfkx1eag.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zuf07w3fy"/><path class="jnfkx1eag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pizza-filled"} {...others} />);
}

export default Component;
