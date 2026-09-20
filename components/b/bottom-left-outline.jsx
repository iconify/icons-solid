import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf6u5i5sy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sf6u5i5sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bottom-left-outline"} {...others} />);
}

export default Component;
