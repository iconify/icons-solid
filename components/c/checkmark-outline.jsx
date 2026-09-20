import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba3fxrbqg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ba3fxrbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:checkmark-outline"} {...others} />);
}

export default Component;
