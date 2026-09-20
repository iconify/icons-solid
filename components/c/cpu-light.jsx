import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utfgr2bmj.css';
import '../../css/d/dzw9pdpsm.css';
import '../../css/r/rplcjjj8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="utfgr2bmj"/><rect class="dzw9pdpsm"/><path class="rplcjjj8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:cpu-light"} {...others} />);
}

export default Component;
