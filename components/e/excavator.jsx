import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpfb8cg1b.css';
import '../../css/s/so98tzb7g.css';
import '../../css/k/kbm_9gb7e.css';
import '../../css/f/fa9nvdc0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tpfb8cg1b"/><path class="so98tzb7g"/><path class="kbm_9gb7e"/><path class="fa9nvdc0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:excavator"} {...others} />);
}

export default Component;
