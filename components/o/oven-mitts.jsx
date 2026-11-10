import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjctnebhy.css';
import '../../css/u/ua9mldbhk.css';
import '../../css/y/yl1wu8b7j.css';
import '../../css/i/ie7xf9b1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fjctnebhy"/><path class="ua9mldbhk"/><path class="yl1wu8b7j"/><path class="ie7xf9b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:oven-mitts"} {...others} />);
}

export default Component;
