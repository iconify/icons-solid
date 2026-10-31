import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqefncc1k.css';
import '../../css/s/svuk72b3v.css';
import '../../css/p/pqjxqrb7n.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="cqefncc1k"/><path class="svuk72b3v"/><path class="pqjxqrb7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lb"} {...others} />);
}

export default Component;
