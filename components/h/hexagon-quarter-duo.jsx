import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr1un1b7q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/g/ga_74_gri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rr1un1b7q secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="ga_74_gri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hexagon-quarter-duo"} {...others} />);
}

export default Component;
