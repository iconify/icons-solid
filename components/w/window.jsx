import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2x0lbi2z.css';
import '../../css/y/ypz3se3da.css';
import '../../css/v/vzxgn5s_f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="s2x0lbi2z"/><path class="ypz3se3da"/><path class="vzxgn5s_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:window"} {...others} />);
}

export default Component;
