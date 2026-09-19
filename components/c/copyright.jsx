import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgq_3dz5s.css';
import '../../css/s/s_0jjobxv.css';
import '../../css/u/u51089nwa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="mgq_3dz5s"/><path class="s_0jjobxv"/><path class="u51089nwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:copyright"} {...others} />);
}

export default Component;
