import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/oia1wqbzb.css';
import '../../css/s/sk-16rb1i.css';
import '../../css/z/zrb6xobrg.css';
import '../../css/o/oxjwpqn3d.css';
import '../../css/t/t_kg827bk.css';
import '../../css/l/lgaj05f-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="oia1wqbzb"/><path class="sk-16rb1i"/><path class="zrb6xobrg"/><path class="oxjwpqn3d"/><path class="t_kg827bk"/><path class="lgaj05f-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:git-pull-request"} {...others} />);
}

export default Component;
