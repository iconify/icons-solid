import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se0wmr1vr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="se0wmr1vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:horse-head-wearing-bridle"} {...others} />);
}

export default Component;
