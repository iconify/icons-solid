import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dooz9ot8q.css';
import '../../css/n/n8dsurkgv.css';
import '../../css/e/etqnjha5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dooz9ot8q"/><path class="n8dsurkgv wm-a"/><path class="etqnjha5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-duo"} {...others} />);
}

export default Component;
