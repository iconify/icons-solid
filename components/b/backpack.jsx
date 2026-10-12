import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyh_evb1o.css';
import '../../css/l/l2rdcr68w.css';
import '../../css/h/h06aqubhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tyh_evb1o"/><path class="l2rdcr68w"/><path class="h06aqubhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:backpack"} {...others} />);
}

export default Component;
