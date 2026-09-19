import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/o/o6iy-4x2x.css';
import '../../css/g/gcmz-ur1o.css';
import '../../css/w/wq_x3acpe.css';
import '../../css/g/geadpubgo.css';
import '../../css/s/svahg3b-b.css';
import '../../css/e/eoo-ektpj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="o6iy-4x2x"/><path class="gcmz-ur1o"/><path class="wq_x3acpe"/><path class="geadpubgo"/><path class="svahg3b-b"/><path class="eoo-ektpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:terrace"} {...others} />);
}

export default Component;
