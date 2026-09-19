import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obybe6j6t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="obybe6j6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:anatomical-heart"} {...others} />);
}

export default Component;
