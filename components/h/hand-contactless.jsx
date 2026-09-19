import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hhclp-bmx.css';
import '../../css/v/vwe9oyznd.css';
import '../../css/s/s71sv1b9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hhclp-bmx"/><path class="vwe9oyznd"/><path class="s71sv1b9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hand-contactless"} {...others} />);
}

export default Component;
