import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mp0vydb-q.css';
import '../../css/j/j5knwxbsn.css';
import '../../css/v/vw0y74bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="mp0vydb-q"/><path class="j5knwxbsn"/><path class="vw0y74bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wrench-02"} {...others} />);
}

export default Component;
