import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkbcjib7e.css';
import '../../css/b/b3yno-tjj.css';
import '../../css/p/pijqxibra.css';
import '../../css/q/qd1s2zbbb.css';
import '../../css/g/gdo86yb9k.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="dkbcjib7e"/><path class="b3yno-tjj"/><path class="pijqxibra"/><path class="qd1s2zbbb"/><path class="gdo86yb9k"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrows-spin-circle-off"} {...others} />);
}

export default Component;
