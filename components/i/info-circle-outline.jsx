import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upv0h93hw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="upv0h93hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:info-circle-outline"} {...others} />);
}

export default Component;
