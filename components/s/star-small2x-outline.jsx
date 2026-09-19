import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwg3kp-2f.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="dwg3kp-2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:star-small2x-outline"} {...others} />);
}

export default Component;
