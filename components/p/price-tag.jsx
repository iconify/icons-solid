import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wya9wt90b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wya9wt90b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:price-tag"} {...others} />);
}

export default Component;
