import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7_xhfb5l.css';
import '../../css/f/f_1_8rbpr.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="k7_xhfb5l"/><path class="f_1_8rbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:seo"} {...others} />);
}

export default Component;
