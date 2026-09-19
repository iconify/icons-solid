import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf1l_yb9s.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="wf1l_yb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:bookmark-empty"} {...others} />);
}

export default Component;
