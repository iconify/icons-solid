import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bet7e2qhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bet7e2qhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:network-device-filled"} {...others} />);
}

export default Component;
