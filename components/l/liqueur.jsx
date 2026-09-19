import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/s/s_8qyd8iz.css';
import '../../css/g/g92hyzclq.css';
import '../../css/h/h2x_h3b3t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="s_8qyd8iz"/><path class="g92hyzclq"/><path class="h2x_h3b3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:liqueur"} {...others} />);
}

export default Component;
