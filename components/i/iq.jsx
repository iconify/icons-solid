import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flkqk9ded.css';
import '../../css/t/t1butsb-t.css';
import '../../css/c/c92sx-uey.css';
import '../../css/o/o-qfpp5_f.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="flkqk9ded"/><path class="t1butsb-t"/><path class="c92sx-uey"/><path class="o-qfpp5_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:iq"} {...others} />);
}

export default Component;
