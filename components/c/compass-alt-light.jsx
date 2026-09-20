import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p058992qq.css';
import '../../css/w/w53vdub7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="p058992qq"/><path class="w53vdub7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-alt-light"} {...others} />);
}

export default Component;
