import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ijybl-k1p.css';
import '../../css/l/lo8jgebwh.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/j/janj24-ql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ijybl-k1p"/><path class="lo8jgebwh wm-a"/><path class="ctjcreb2q"/><path class="janj24-ql wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-text-duo"} {...others} />);
}

export default Component;
