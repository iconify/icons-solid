import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qemcyt1xs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qemcyt1xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:car-in-gabled-building"} {...others} />);
}

export default Component;
