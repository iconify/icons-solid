import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loq8_m6rr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="loq8_m6rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:arrow-left-small-outline"} {...others} />);
}

export default Component;
