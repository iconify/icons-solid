import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac1ym9b_t.css';

const viewBox = {"width":2048,"height":2048};
const content = `<rect transform="rotate(-45 -120466.552 -49977.13)scale(96.7529)" class="ac1ym9b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:gateway"} {...others} />);
}

export default Component;
