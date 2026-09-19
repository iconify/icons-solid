import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmqz3cb_j.css';
import '../../css/g/g0moj261j.css';
import '../../css/e/elnju8bvz.css';
import '../../css/a/agazg70dp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="hmqz3cb_j"><path class="g0moj261j"/><path class="elnju8bvz"/><path class="agazg70dp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:beating-heart"} {...others} />);
}

export default Component;
