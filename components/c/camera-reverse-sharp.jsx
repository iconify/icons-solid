import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzveq5_2n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uzveq5_2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:camera-reverse-sharp"} {...others} />);
}

export default Component;
