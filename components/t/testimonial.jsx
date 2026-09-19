import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcq8mv15g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mcq8mv15g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:testimonial"} {...others} />);
}

export default Component;
