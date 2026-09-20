import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1oxt4voe.css';
import '../../css/p/py37p5bvs.css';
import '../../css/v/vm_1_tbws.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="j1oxt4voe"/><path class="py37p5bvs"/><path class="vm_1_tbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tag"} {...others} />);
}

export default Component;
