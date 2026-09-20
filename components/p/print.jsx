import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hd165ibnb.css';
import '../../css/y/yurni7brp.css';
import '../../css/t/to5-9c1tp.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/t/tqzrmzbxt.css';
import '../../css/y/yg0-ehb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hd165ibnb"/><path class="yurni7brp"/><path class="to5-9c1tp"/><g class="p_3zmsvya"><path class="tqzrmzbxt"/><path class="yg0-ehb1i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:print"} {...others} />);
}

export default Component;
