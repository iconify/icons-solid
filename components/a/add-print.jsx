import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/g/g3bzu6tbx.css';
import '../../css/w/wwarg-bxz.css';
import '../../css/f/fm1umgbyy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="g3bzu6tbx"/><path class="wwarg-bxz"/><path class="fm1umgbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:add-print"} {...others} />);
}

export default Component;
