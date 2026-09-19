import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhm26nblu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mhm26nblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cart-plus-fill"} {...others} />);
}

export default Component;
