import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmqz3cb_j.css';
import '../../css/p/p9jsv1uun.css';
import '../../css/e/ecbc4xvjq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="hmqz3cb_j"><path class="p9jsv1uun"/><path class="ecbc4xvjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:broken-heart"} {...others} />);
}

export default Component;
