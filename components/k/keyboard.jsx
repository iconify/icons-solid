import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnp73_ylh.css';
import '../../css/t/ta_4rc_6v.css';
import '../../css/a/ay9y0bb7b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cnp73_ylh"/><path clip-rule="evenodd" class="ta_4rc_6v"/><path class="ay9y0bb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:keyboard"} {...others} />);
}

export default Component;
