import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk2o14bhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pk2o14bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:shopping-bag"} {...others} />);
}

export default Component;
