import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhxur4cag.css';
import '../../css/n/n4a-sla6i.css';
import '../../css/m/mtgc5t_9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uhxur4cag"/><path class="n4a-sla6i"/><path class="mtgc5t_9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chalkboard-off"} {...others} />);
}

export default Component;
