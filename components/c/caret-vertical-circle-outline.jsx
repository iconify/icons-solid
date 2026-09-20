import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdrxi_5qi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mdrxi_5qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:caret-vertical-circle-outline"} {...others} />);
}

export default Component;
