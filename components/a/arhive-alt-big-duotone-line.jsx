import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-rkljbsp.css';
import '../../css/l/llqben-1x.css';
import '../../css/a/aq5gtksql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-rkljbsp"/><path class="llqben-1x"/><path class="aq5gtksql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-big-duotone-line"} {...others} />);
}

export default Component;
