import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kllp8i1cr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kllp8i1cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clipboard-minus-fill-round"} {...others} />);
}

export default Component;
