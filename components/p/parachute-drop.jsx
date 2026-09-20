import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k7akwpbbx.css';
import '../../css/l/ll8fe0-ds.css';
import '../../css/s/spas5x30v.css';
import '../../css/y/ywzm4ifnv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="k7akwpbbx"/><path class="ll8fe0-ds"/><path class="spas5x30v"/><path class="ywzm4ifnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:parachute-drop"} {...others} />);
}

export default Component;
