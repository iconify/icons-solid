import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb7wkv_1h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="eb7wkv_1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:castle-stately-14"} {...others} />);
}

export default Component;
