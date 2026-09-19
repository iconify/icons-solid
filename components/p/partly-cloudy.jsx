import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7v3c9hfx.css';
import '../../css/j/jaeag7yzt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h7v3c9hfx"/><path class="jaeag7yzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:partly-cloudy"} {...others} />);
}

export default Component;
