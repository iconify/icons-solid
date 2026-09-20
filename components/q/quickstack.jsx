import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4ie978fy.css';
import '../../css/s/si4ma1_ob.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u4ie978fy"/><path class="si4ma1_ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quickstack"} {...others} />);
}

export default Component;
