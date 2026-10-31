import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rrioiyb3a.css';
import '../../css/y/ywxzv4aty.css';
import '../../css/h/h18lq-uwn.css';
import '../../css/t/to6psxsai.css';
import '../../css/d/dzy0ndbdi.css';
import '../../css/e/edrjjbbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rrioiyb3a wm-shadow"/><path class="wm-shadow ywxzv4aty"/><path class="h18lq-uwn"/><path class="to6psxsai"/><path class="dzy0ndbdi"/><path class="edrjjbbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-pull-request-draft"} {...others} />);
}

export default Component;
