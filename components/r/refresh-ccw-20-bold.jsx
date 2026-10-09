import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv5tshbbx.css';
import '../../css/b/b7nj-761u.css';
import '../../css/n/ndokbv5ou.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yv5tshbbx"/><path class="b7nj-761u"/><path class="ndokbv5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-ccw-20-bold"} {...others} />);
}

export default Component;
