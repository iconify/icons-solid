import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxgn_9bir.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="fxgn_9bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:envelope-check-thin"} {...others} />);
}

export default Component;
