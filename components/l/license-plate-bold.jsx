import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i98g5tvxl.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="i98g5tvxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:license-plate-bold"} {...others} />);
}

export default Component;
