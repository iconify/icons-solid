import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwu_5rbeb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/c/cxeo3lbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwu_5rbeb secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="cxeo3lbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hexagon-two-third-duo"} {...others} />);
}

export default Component;
