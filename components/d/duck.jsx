import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dox58tamg.css';
import '../../css/w/w7xqf2bhc.css';
import '../../css/c/cm_b0kbjf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dox58tamg"/><path class="w7xqf2bhc"/><circle class="cm_b0kbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:duck"} {...others} />);
}

export default Component;
