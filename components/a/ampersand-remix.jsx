import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w16p4jb_q.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w16p4jb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ampersand-remix"} {...others} />);
}

export default Component;
