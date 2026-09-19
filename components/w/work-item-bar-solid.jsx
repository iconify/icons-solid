import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0kmr-bai.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="c0kmr-bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:work-item-bar-solid"} {...others} />);
}

export default Component;
