import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s4y_jrbmi.css';
import '../../css/g/gdioz716d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s4y_jrbmi"/><path class="gdioz716d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:justice-scale-2"} {...others} />);
}

export default Component;
