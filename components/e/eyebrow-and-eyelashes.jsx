import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi_56x-la.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oi_56x-la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eyebrow-and-eyelashes"} {...others} />);
}

export default Component;
