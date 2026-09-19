import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2-xu8boa.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="y2-xu8boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:timeline-delivery"} {...others} />);
}

export default Component;
