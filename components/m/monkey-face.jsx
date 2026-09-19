import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7gemwb9q.css';
import '../../css/m/m6_rnhb7u.css';
import '../../css/s/sxb-9pbqm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="u7gemwb9q"/><path class="m6_rnhb7u"/><path class="sxb-9pbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:monkey-face"} {...others} />);
}

export default Component;
