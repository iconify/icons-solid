import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns4x1ubzt.css';
import '../../css/x/xymu9dbwi.css';
import '../../css/a/aqi7mnbvx.css';
import '../../css/h/h2ii2u4ol.css';
import '../../css/l/lrln7kj3m.css';
import '../../css/m/m12-ik_gu.css';
import '../../css/l/lg2debczs.css';
import '../../css/h/h15kjqltt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ns4x1ubzt"/><path class="xymu9dbwi"/><path class="aqi7mnbvx"/><circle class="h2ii2u4ol"/><circle class="lrln7kj3m"/><circle class="m12-ik_gu"/><circle class="lg2debczs"/><path class="h15kjqltt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:videogame"} {...others} />);
}

export default Component;
