import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvxfd2b7s.css';
import '../../css/j/jawt2pdal.css';
import '../../css/p/pf5yg-grl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uvxfd2b7s"/><path class="jawt2pdal"/><path class="pf5yg-grl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:inbox-duotone"} {...others} />);
}

export default Component;
