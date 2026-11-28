import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlznw-a5v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/d/dbfl50qks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tlznw-a5v"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="dbfl50qks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hexagon-third-duo"} {...others} />);
}

export default Component;
