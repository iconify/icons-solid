import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae4o2u4po.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ae4o2u4po"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-water-glass-glass-water-juice-drink-liquid"} {...others} />);
}

export default Component;
