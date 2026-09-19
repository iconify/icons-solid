import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov2syn0_k.css';

const viewBox = {"width":760,"height":850};
const content = `<path class="ov2syn0_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:dribbble"} {...others} />);
}

export default Component;
