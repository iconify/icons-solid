import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxsq5cb_w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bxsq5cb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:merge-ltr"} {...others} />);
}

export default Component;
