import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ijybl-k1p.css';
import '../../css/j/janj24-ql.css';
import '../../css/c/ctjcreb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ijybl-k1p"/><path class="janj24-ql wm-a"/><path class="ctjcreb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-duo"} {...others} />);
}

export default Component;
