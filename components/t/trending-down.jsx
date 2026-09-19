import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tiukocbxm.css';
import '../../css/o/oaagkkbdt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tiukocbxm"/><path class="oaagkkbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:trending-down"} {...others} />);
}

export default Component;
