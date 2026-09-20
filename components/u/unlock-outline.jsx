import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn8fv0bej.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tn8fv0bej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:unlock-outline"} {...others} />);
}

export default Component;
