import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1k2pwbwt.css';
import '../../css/q/qt7kmab9u.css';
import '../../css/v/v7x6mkybi.css';
import '../../css/s/sjr1ayb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r1k2pwbwt wm-shadow"/><path class="qt7kmab9u"/><path class="v7x6mkybi"/><path class="sjr1ayb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bath"} {...others} />);
}

export default Component;
