import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/p/p4k353buy.css';
import '../../css/a/axw2i00ln.css';
import '../../css/j/jh2gulbxh.css';
import '../../css/g/g529urb3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="p4k353buy"/><path class="axw2i00ln"/><path class="jh2gulbxh"/><path class="g529urb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:windows-coding-pop"} {...others} />);
}

export default Component;
