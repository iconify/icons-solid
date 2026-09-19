import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shvltlb-q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="shvltlb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:phone-vibrate-fill"} {...others} />);
}

export default Component;
