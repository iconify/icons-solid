import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7onacbub.css';
import '../../css/f/f6gjy-b9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x7onacbub"/><path class="f6gjy-b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flashlight-off-filled"} {...others} />);
}

export default Component;
