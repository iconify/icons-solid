import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbiw6mb8g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bbiw6mb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:bell-pepper"} {...others} />);
}

export default Component;
