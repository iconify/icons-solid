import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rd-15bc4w.css';
import '../../css/n/ntzoix46g.css';
import '../../css/o/os1_hxbhc.css';
import '../../css/h/hmyc3wbam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rd-15bc4w"/><path class="ntzoix46g"/><path class="os1_hxbhc"/><path class="hmyc3wbam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:helicopter"} {...others} />);
}

export default Component;
