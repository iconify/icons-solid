import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_k1bgw3w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l_k1bgw3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:rotate-anti-clockwise"} {...others} />);
}

export default Component;
