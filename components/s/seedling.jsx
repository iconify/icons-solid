import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/et3i3ja-x.css';
import '../../css/z/zo2e37brb.css';
import '../../css/z/z2-tajbun.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="et3i3ja-x"/><path class="zo2e37brb"/><path class="z2-tajbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:seedling"} {...others} />);
}

export default Component;
