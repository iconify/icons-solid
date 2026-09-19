import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6iqb18wt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u6iqb18wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:shopping-cart"} {...others} />);
}

export default Component;
