import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5wfg6bef.css';
import '../../css/s/sx4milo_q.css';
import '../../css/q/qujwvbc1j.css';
import '../../css/n/nm5ll-bib.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="j5wfg6bef"/><path class="sx4milo_q"/><path class="qujwvbc1j"/><path class="nm5ll-bib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cl"} {...others} />);
}

export default Component;
