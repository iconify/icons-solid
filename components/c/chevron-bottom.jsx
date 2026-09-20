import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz945htqo.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="kz945htqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:chevron-bottom"} {...others} />);
}

export default Component;
