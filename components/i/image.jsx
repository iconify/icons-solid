import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewbnvrb4j.css';
import '../../css/a/a0qwh727o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ewbnvrb4j"/><path class="a0qwh727o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:image"} {...others} />);
}

export default Component;
