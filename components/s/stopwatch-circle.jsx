import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xzf6s-m2d.css';
import '../../css/a/a5x-1hbqo.css';
import '../../css/f/f8rvuy2ad.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xzf6s-m2d"/><path class="a5x-1hbqo"/><path class="f8rvuy2ad"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:stopwatch-circle"} {...others} />);
}

export default Component;
