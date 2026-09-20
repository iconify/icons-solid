import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxcr81blq.css';
import '../../css/t/t57gmwbsc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wxcr81blq"/><path clip-rule="evenodd" class="t57gmwbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:notification-application-1-solid"} {...others} />);
}

export default Component;
