import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h1z0a1bpi.css';
import '../../css/a/a7jc95b4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="h1z0a1bpi"/><path class="a7jc95b4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ticket-01"} {...others} />);
}

export default Component;
