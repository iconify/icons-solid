import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbq-w5j8i.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vbq-w5j8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:media-step-forward"} {...others} />);
}

export default Component;
