import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0maw-bnl.css';

const viewBox = {"width":841.89,"height":595.28};
const content = `<path class="e0maw-bnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:xai-grok-dark"} {...others} />);
}

export default Component;
