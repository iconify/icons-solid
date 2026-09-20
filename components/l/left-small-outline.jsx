import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke_s0c99d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ke_s0c99d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:left-small-outline"} {...others} />);
}

export default Component;
