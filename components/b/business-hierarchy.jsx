import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bj0pzz_wo.css';
import '../../css/n/nhvxczbnk.css';
import '../../css/s/soa2b6b4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bj0pzz_wo"/><path class="nhvxczbnk"/><path class="soa2b6b4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-hierarchy"} {...others} />);
}

export default Component;
