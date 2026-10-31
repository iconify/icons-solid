import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd3j_obfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd3j_obfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:umbrella-fill-round"} {...others} />);
}

export default Component;
