import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qbf78s5yv.css';
import '../../css/i/iul0chb4j.css';
import '../../css/h/h51xg8b7m.css';
import '../../css/t/tgevrrbbx.css';
import '../../css/n/n9h-37zqt.css';
import '../../css/r/r186s1bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qbf78s5yv wm-shadow"/><path class="iul0chb4j"/><path class="h51xg8b7m"/><path class="tgevrrbbx"/><path class="n9h-37zqt wm-shine"/><path class="r186s1bzo wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cactus"} {...others} />);
}

export default Component;
