import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/au-phnwrn.css';
import '../../css/v/v2o4ilcrp.css';
import '../../css/a/aqpsapbet.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="au-phnwrn"/><path class="v2o4ilcrp"/><path clip-rule="evenodd" class="aqpsapbet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-pressure"} {...others} />);
}

export default Component;
