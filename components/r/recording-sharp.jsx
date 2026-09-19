import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djn_kwbxi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="djn_kwbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:recording-sharp"} {...others} />);
}

export default Component;
