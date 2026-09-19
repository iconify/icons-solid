import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3frg7bxu.css';
import '../../css/y/yr77b-b_k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w3frg7bxu"/><path class="yr77b-b_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:delivery-add"} {...others} />);
}

export default Component;
