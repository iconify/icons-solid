import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p89u65b4c.css';
import '../../css/t/tkv-8vb7l.css';
import '../../css/h/he39f3j1o.css';
import '../../css/h/h88rv8bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p89u65b4c"/><path class="tkv-8vb7l"/><path class="he39f3j1o"/><path class="h88rv8bqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-crazy"} {...others} />);
}

export default Component;
