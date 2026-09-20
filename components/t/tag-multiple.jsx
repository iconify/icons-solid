import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxxralbqe.css';
import '../../css/p/pn6ffdb6z.css';
import '../../css/m/mrby1cb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xxxralbqe"/><path class="pn6ffdb6z"/><path class="mrby1cb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:tag-multiple"} {...others} />);
}

export default Component;
