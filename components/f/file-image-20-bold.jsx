import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8im5qk_h.css';
import '../../css/h/h3lbpzshh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w8im5qk_h"/><path class="h3lbpzshh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-image-20-bold"} {...others} />);
}

export default Component;
