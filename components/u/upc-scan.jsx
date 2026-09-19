import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp6hhk2lp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kp6hhk2lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:upc-scan"} {...others} />);
}

export default Component;
