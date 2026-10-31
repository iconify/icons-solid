import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/przbox5lp.css';
import '../../css/o/o_3qdsr7f.css';
import '../../css/r/rc2cecb_x.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="przbox5lp"/><path class="o_3qdsr7f"/><path class="rc2cecb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:it"} {...others} />);
}

export default Component;
