import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9u8yg5wu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9u8yg5wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:reply-all-duotone-round"} {...others} />);
}

export default Component;
