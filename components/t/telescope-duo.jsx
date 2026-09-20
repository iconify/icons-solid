import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/q/qs--27sog.css';
import '../../css/g/giymj9btx.css';
import '../../css/a/adu5pvlll.css';
import '../../css/h/h7uox1b4n.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="qs--27sog"/><path class="giymj9btx"/><path class="adu5pvlll"/><path class="h7uox1b4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:telescope-duo"} {...others} />);
}

export default Component;
