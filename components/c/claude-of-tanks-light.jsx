import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx8f_jb4v.css';
import '../../css/k/k4yovub7q.css';

const viewBox = {"width":9956,"height":700,"left":55,"top":142};
const content = `<path class="qx8f_jb4v"/><path class="k4yovub7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:claude-of-tanks-light"} {...others} />);
}

export default Component;
