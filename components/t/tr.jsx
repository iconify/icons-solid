import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s45eg_h4c.css';
import '../../css/f/fs7_gbffp.css';
import '../../css/n/nlky_nbog.css';
import '../../css/a/a3suuj9no.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="s45eg_h4c"/><circle class="fs7_gbffp"/><circle class="nlky_nbog"/><path class="a3suuj9no"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tr"} {...others} />);
}

export default Component;
