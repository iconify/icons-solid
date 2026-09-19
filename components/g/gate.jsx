import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hez4fkboo.css';
import '../../css/v/vt-d02btz.css';
import '../../css/i/ias54l6cj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="hez4fkboo"/><path class="vt-d02btz"/><path class="ias54l6cj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gate"} {...others} />);
}

export default Component;
