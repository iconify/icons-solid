import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtp_8xwkj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="gtp_8xwkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:duo-chat-off"} {...others} />);
}

export default Component;
