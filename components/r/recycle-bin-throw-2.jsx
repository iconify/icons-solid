import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-8t_4bet.css';
import '../../css/p/p8rhusbnu.css';
import '../../css/f/fxnk5mbni.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k-8t_4bet"/><path class="p8rhusbnu"/><path class="fxnk5mbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:recycle-bin-throw-2"} {...others} />);
}

export default Component;
