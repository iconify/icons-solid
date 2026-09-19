import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-0vfrb6n.css';
import '../../css/s/s0p3q6b3u.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k-0vfrb6n"/><path class="s0p3q6b3u"/><path class="de29zjbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:raising-hands-medium-dark"} {...others} />);
}

export default Component;
