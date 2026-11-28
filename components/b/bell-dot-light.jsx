import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phq3-bb_w.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="phq3-bb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bell-dot-light"} {...others} />);
}

export default Component;
