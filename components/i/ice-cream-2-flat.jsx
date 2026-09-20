import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu3j9c4yd.css';
import '../../css/k/ktgnb8b9j.css';
import '../../css/x/x736_-_mc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pu3j9c4yd"/><path clip-rule="evenodd" class="ktgnb8b9j"/><path clip-rule="evenodd" class="x736_-_mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ice-cream-2-flat"} {...others} />);
}

export default Component;
