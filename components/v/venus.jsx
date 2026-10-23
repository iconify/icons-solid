import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p7wmotbpf.css';
import '../../css/d/dy_xmpjdx.css';
import '../../css/g/gf0diyb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="p7wmotbpf"/><path class="dy_xmpjdx"/><path class="gf0diyb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:venus"} {...others} />);
}

export default Component;
