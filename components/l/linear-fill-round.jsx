import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im7ik3b6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im7ik3b6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:linear-fill-round"} {...others} />);
}

export default Component;
