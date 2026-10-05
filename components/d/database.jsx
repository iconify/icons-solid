import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wgfklyb7h.css';
import '../../css/s/shxoidcvw.css';
import '../../css/e/ec7r83b9y.css';
import '../../css/d/dexvbquxk.css';
import '../../css/y/yx4uo46pj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wgfklyb7h"/><path class="shxoidcvw"/><path class="ec7r83b9y"/><path class="dexvbquxk"/><path class="yx4uo46pj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:database"} {...others} />);
}

export default Component;
