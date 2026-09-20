import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvkc8whus.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="pvkc8whus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:swimming"} {...others} />);
}

export default Component;
