import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/q4z7accis.css';
import '../../css/r/rqbsb5yod.css';
import '../../css/b/b7h7ulb6g.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="h01tyzbfu"><path class="q4z7accis"/><path class="rqbsb5yod"/><path class="b7h7ulb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:target-outline"} {...others} />);
}

export default Component;
