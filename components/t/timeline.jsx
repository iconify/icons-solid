import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_h3lz1qs.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="v_h3lz1qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:timeline"} {...others} />);
}

export default Component;
