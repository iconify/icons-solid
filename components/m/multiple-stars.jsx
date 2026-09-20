import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d077qu89t.css';
import '../../css/o/ome0ssbuc.css';
import '../../css/n/n17r6tbwn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d077qu89t"/><path class="ome0ssbuc"/><path class="n17r6tbwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:multiple-stars"} {...others} />);
}

export default Component;
