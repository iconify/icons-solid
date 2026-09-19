import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3pba0m2o.css';
import '../../css/u/u700x2bqz.css';
import '../../css/v/v4jtg59fd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="a3pba0m2o"/><path class="u700x2bqz"/><path class="v4jtg59fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oncoming-fist-light"} {...others} />);
}

export default Component;
