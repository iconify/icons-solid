import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9fcnnbjt.css';
import '../../css/q/qy7h5ub6t.css';
import '../../css/b/bksoibsiv.css';
import '../../css/p/pcoq81bdi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="j9fcnnbjt"/><path class="qy7h5ub6t"/><path class="bksoibsiv"/><path class="pcoq81bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:virtual-reality"} {...others} />);
}

export default Component;
