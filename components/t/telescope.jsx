import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpfos8bev.css';
import '../../css/e/e29uf1b8c.css';
import '../../css/b/bcnu-pbyh.css';
import '../../css/h/hjcym577p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lpfos8bev"/><path class="e29uf1b8c"/><path class="bcnu-pbyh"/><path class="hjcym577p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:telescope"} {...others} />);
}

export default Component;
