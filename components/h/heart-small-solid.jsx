import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap_4y_bzw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ap_4y_bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:heart-small-solid"} {...others} />);
}

export default Component;
