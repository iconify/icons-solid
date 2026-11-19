import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs-2sqbvq.css';
import '../../css/h/hqorf7v8g.css';
import '../../css/i/i_s9zy2ca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gs-2sqbvq"/><path class="hqorf7v8g"/><path class="i_s9zy2ca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-check"} {...others} />);
}

export default Component;
