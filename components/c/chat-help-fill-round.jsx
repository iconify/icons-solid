import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phgq0i6ix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phgq0i6ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-help-fill-round"} {...others} />);
}

export default Component;
