import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfvx0vbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wfvx0vbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-minus-inside"} {...others} />);
}

export default Component;
