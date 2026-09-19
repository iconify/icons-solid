import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pc7xp6bgg.css';
import '../../css/l/llyn7xqin.css';
import '../../css/t/t7823frrc.css';
import '../../css/m/m-vyb6byy.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="pc7xp6bgg"/><path class="llyn7xqin"/><path class="t7823frrc"/><path class="m-vyb6byy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mu-1x1"} {...others} />);
}

export default Component;
