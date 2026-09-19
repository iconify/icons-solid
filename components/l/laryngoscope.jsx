import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edp3p7bwr.css';
import '../../css/h/hh_ng-b9n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="edp3p7bwr"/><path clip-rule="evenodd" class="hh_ng-b9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:laryngoscope"} {...others} />);
}

export default Component;
