import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x733y_y1a.css';
import '../../css/o/odgt6qb4r.css';
import '../../css/f/fi821nc1v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="x733y_y1a"/><path class="odgt6qb4r"/><path clip-rule="evenodd" class="fi821nc1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:help"} {...others} />);
}

export default Component;
