import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfz1t-ffx.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="bfz1t-ffx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:wifi-ethernet"} {...others} />);
}

export default Component;
