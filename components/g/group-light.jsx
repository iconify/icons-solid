import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohdlwlbpi.css';
import '../../css/s/s8dgoxb2t.css';
import '../../css/c/c97vutbhc.css';
import '../../css/d/dvpu84fxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ohdlwlbpi"/><path class="s8dgoxb2t"/><path class="c97vutbhc"/><path class="dvpu84fxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:group-light"} {...others} />);
}

export default Component;
