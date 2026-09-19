import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq3nws7ve.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wq3nws7ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:xing-with-circle"} {...others} />);
}

export default Component;
