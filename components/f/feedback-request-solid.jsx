import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkgs2j2gi.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="qkgs2j2gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:feedback-request-solid"} {...others} />);
}

export default Component;
