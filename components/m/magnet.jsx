import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p01-_xmpy.css';
import '../../css/a/azh47uimu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p01-_xmpy"/><path class="azh47uimu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:magnet"} {...others} />);
}

export default Component;
