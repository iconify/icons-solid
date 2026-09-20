import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqtj3ocrl.css';
import '../../css/p/pu9v-6rxs.css';
import '../../css/b/bge5wbcyq.css';
import '../../css/y/y2j1rbc4o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xqtj3ocrl"/><path class="pu9v-6rxs"/><path class="bge5wbcyq"/><path class="y2j1rbc4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:watch-2"} {...others} />);
}

export default Component;
