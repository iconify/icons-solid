import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qa0r4-b7l.css';
import '../../css/o/omo2j4d-w.css';
import '../../css/d/d-sztwbjt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qa0r4-b7l"/><path class="omo2j4d-w"/><path class="d-sztwbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:earpods"} {...others} />);
}

export default Component;
