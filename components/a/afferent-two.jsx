import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/r7_3mv3yj.css';
import '../../css/i/i5g60itze.css';
import '../../css/y/y3ruezbdg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="r7_3mv3yj"/><path class="i5g60itze"/><path class="y3ruezbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:afferent-two"} {...others} />);
}

export default Component;
