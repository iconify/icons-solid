import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5t9vt_or.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n5t9vt_or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:un-link"} {...others} />);
}

export default Component;
