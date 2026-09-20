import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-sv5cbsg.css';
import '../../css/e/ejoji3b3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-sv5cbsg"/><path class="ejoji3b3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:houses-filled"} {...others} />);
}

export default Component;
