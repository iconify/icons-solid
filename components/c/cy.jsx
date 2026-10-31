import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/y/ynp0jcc1r.css';
import '../../css/s/sco3mfb2q.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="l88qm1qag"/><path class="ynp0jcc1r"/><path class="sco3mfb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cy"} {...others} />);
}

export default Component;
