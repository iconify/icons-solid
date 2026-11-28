import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/ru4kvqb6t.css';
import '../../css/r/rryr48bex.css';
import '../../css/d/dgztv9d8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ru4kvqb6t"/><path class="rryr48bex"/><path class="dgztv9d8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:parentheses-x"} {...others} />);
}

export default Component;
