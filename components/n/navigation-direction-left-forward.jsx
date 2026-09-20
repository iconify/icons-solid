import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/j/j3v39jmcl.css';
import '../../css/e/ezazlrbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="j3v39jmcl"/><path class="ezazlrbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:navigation-direction-left-forward"} {...others} />);
}

export default Component;
