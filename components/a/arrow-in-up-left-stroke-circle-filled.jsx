import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxbgy5bzx.css';
import '../../css/l/l_-go266m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxbgy5bzx"/><path class="l_-go266m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-left-stroke-circle-filled"} {...others} />);
}

export default Component;
