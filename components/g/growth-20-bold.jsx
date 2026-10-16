import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjtcl1bev.css';
import '../../css/a/a7u6cyhmr.css';
import '../../css/b/b5w0wtb3k.css';
import '../../css/s/s-x7mwb-w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kjtcl1bev"/><path class="a7u6cyhmr"/><path class="b5w0wtb3k"/><path class="s-x7mwb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:growth-20-bold"} {...others} />);
}

export default Component;
