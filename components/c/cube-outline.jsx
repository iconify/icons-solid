import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no18gackv.css';
import '../../css/e/e9f-1ebjm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="no18gackv"/><path class="e9f-1ebjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cube-outline"} {...others} />);
}

export default Component;
