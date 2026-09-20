import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iw4gmnxtx.css';
import '../../css/m/m0iv8zt0r.css';
import '../../css/l/lcyumsbfg.css';
import '../../css/z/zyj4joh2r.css';
import '../../css/v/vmj8f58-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="iw4gmnxtx"/><path class="m0iv8zt0r"/><path class="lcyumsbfg"/><path class="zyj4joh2r"/><path class="vmj8f58-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wireless-house-signal"} {...others} />);
}

export default Component;
