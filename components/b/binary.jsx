import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j3cn9rb9q.css';
import '../../css/b/bq7bz5b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j3cn9rb9q"/><path class="bq7bz5b6b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:binary"} {...others} />);
}

export default Component;
