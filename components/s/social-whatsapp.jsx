import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyfsfosee.css';
import '../../css/g/giof89hnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyfsfosee"/><path clip-rule="evenodd" class="giof89hnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:social-whatsapp"} {...others} />);
}

export default Component;
