import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl1-wob7j.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="dl1-wob7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bookmark-simple-check-bold"} {...others} />);
}

export default Component;
