import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jjw5qv84q.css';
import '../../css/w/w28udjbrl.css';
import '../../css/m/m16g0fbjv.css';
import '../../css/l/ldeprfbim.css';
import '../../css/o/o5xl7dofs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jjw5qv84q wm-shadow"/><path class="w28udjbrl"/><path class="m16g0fbjv"/><path class="ldeprfbim"/><path class="o5xl7dofs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:music-2"} {...others} />);
}

export default Component;
