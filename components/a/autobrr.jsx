import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mda9u4_io.css';
import '../../css/v/vuvq3lhqi.css';
import '../../css/a/a3zk-ac1v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="ft5dv1b6b"><path class="mda9u4_io"/><path class="vuvq3lhqi"/><circle class="a3zk-ac1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:autobrr"} {...others} />);
}

export default Component;
