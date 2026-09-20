import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qz__wnx3u.css';
import '../../css/c/cgk9o2bmx.css';
import '../../css/o/o9ay5y_5p.css';
import '../../css/f/feidr8b6a.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qz__wnx3u"/><path class="cgk9o2bmx"/><path class="o9ay5y_5p"/><path class="feidr8b6a"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:yen-circle"} {...others} />);
}

export default Component;
