import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esp89b3wi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="esp89b3wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-send-outline"} {...others} />);
}

export default Component;
