import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/tbxf0xifz.css';
import '../../css/x/x4sh5ybyf.css';
import '../../css/b/bd_jjxd9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="tbxf0xifz"/><path class="x4sh5ybyf"/><path class="bd_jjxd9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:google-home-2"} {...others} />);
}

export default Component;
