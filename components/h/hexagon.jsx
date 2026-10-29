import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jkgpoqkdx.css';
import '../../css/q/qghtdlbld.css';
import '../../css/e/egxtmkb4t.css';
import '../../css/y/y426l4bvc.css';
import '../../css/a/a3_72ac5y.css';
import '../../css/y/yw3q-bb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jkgpoqkdx wm-shadow"/><path class="qghtdlbld"/><path class="egxtmkb4t"/><path class="y426l4bvc"/><path class="a3_72ac5y wm-shine"/><path class="wm-deco yw3q-bb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:hexagon"} {...others} />);
}

export default Component;
