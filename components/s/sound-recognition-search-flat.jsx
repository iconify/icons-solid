import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clvjrx21n.css';
import '../../css/r/rwkubzx0j.css';
import '../../css/c/cr22hgbmq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="clvjrx21n"/><path clip-rule="evenodd" class="rwkubzx0j"/><path clip-rule="evenodd" class="cr22hgbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:sound-recognition-search-flat"} {...others} />);
}

export default Component;
