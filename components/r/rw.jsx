import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjfdwacdw.css';
import '../../css/r/rwd8hhbfs.css';
import '../../css/p/pulp8sdfd.css';
import '../../css/e/efrmxpitk.css';
import '../../css/w/w8xm4rb6m.css';
import '../../css/w/wtl7j6baz.css';
import '../../css/j/j9f8j_b5w.css';
import '../../css/l/ly9di58kn.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="qjfdwacdw"/><path class="rwd8hhbfs"/><path class="pulp8sdfd"/><path class="efrmxpitk"/><path class="w8xm4rb6m"/><path class="wtl7j6baz"/><path class="j9f8j_b5w"/><circle class="ly9di58kn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:rw"} {...others} />);
}

export default Component;
