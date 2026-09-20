import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlj9kwion.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zlj9kwion"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whisper-money-dark"} {...others} />);
}

export default Component;
