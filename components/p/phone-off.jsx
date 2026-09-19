import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ev4kgfbxa.css';
import '../../css/c/c5sn43wmm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ev4kgfbxa"/><path class="c5sn43wmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-off"} {...others} />);
}

export default Component;
