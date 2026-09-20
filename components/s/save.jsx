import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0c_hvufd.css';
import '../../css/h/h3q-mcb9s.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="q0c_hvufd"/><path class="h3q-mcb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:save"} {...others} />);
}

export default Component;
