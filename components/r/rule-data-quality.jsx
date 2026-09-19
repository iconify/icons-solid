import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6zcjhb8g.css';
import '../../css/v/vt3ssfbtt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j6zcjhb8g"/><path class="vt3ssfbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rule-data-quality"} {...others} />);
}

export default Component;
