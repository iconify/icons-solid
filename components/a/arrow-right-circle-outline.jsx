import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwh-h-rhk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jwh-h-rhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:arrow-right-circle-outline"} {...others} />);
}

export default Component;
