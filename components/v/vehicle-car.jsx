import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj84xyb2g.css';
import '../../css/z/zeoxv5b2o.css';
import '../../css/p/pmgt1fc3u.css';
import '../../css/j/j6u3e6b3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vj84xyb2g"/><circle class="zeoxv5b2o"/><circle class="pmgt1fc3u"/><path class="j6u3e6b3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:vehicle-car"} {...others} />);
}

export default Component;
