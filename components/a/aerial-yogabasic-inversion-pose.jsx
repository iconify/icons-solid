import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/sm_nmlb9u.css';
import '../../css/y/ye-rmuoxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="sm_nmlb9u"/><path class="ye-rmuoxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:aerial-yogabasic-inversion-pose"} {...others} />);
}

export default Component;
