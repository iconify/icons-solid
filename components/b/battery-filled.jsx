import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xobw0_9rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xobw0_9rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:battery-filled"} {...others} />);
}

export default Component;
