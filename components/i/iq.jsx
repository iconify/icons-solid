import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6u564dvt.css';
import '../../css/k/k9sd23bwb.css';
import '../../css/c/c92sx-uey.css';
import '../../css/s/sd82rxmkj.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="a6u564dvt"/><path class="k9sd23bwb"/><path class="c92sx-uey"/><path class="sd82rxmkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:iq"} {...others} />);
}

export default Component;
