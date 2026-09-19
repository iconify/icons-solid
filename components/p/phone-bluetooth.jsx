import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmi8ijf7w.css';

const viewBox = {"width":384,"height":432};
const content = `<path class="dmi8ijf7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:phone-bluetooth"} {...others} />);
}

export default Component;
