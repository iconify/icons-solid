import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9820actr.css';
import '../../css/h/hazzuka2l.css';
import '../../css/q/q4kgps97f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p9820actr"/><path class="hazzuka2l"/><path class="q4kgps97f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fish"} {...others} />);
}

export default Component;
