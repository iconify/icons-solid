import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1nv75n_k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1nv75n_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:merge-rtl"} {...others} />);
}

export default Component;
