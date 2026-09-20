import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkr-y0bjo.css';
import '../../css/p/pfpnh2nsv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lkr-y0bjo"/><path class="pfpnh2nsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:book-ltr"} {...others} />);
}

export default Component;
