import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km69o8ksh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="km69o8ksh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:folder-open-outline"} {...others} />);
}

export default Component;
