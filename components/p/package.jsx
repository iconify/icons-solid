import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o-pqf7eub.css';
import '../../css/x/xr30mvbzj.css';
import '../../css/y/y33pzdb5t.css';
import '../../css/y/ye_izkbzt.css';
import '../../css/g/g8-fd1i8q.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="o-pqf7eub wm-shadow"/><path class="xr30mvbzj"/><path class="y33pzdb5t"/><path class="ye_izkbzt"/><path class="g8-fd1i8q wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:package"} {...others} />);
}

export default Component;
