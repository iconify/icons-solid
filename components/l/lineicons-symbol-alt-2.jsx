import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssww8xbdc.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ssww8xbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:lineicons-symbol-alt-2"} {...others} />);
}

export default Component;
