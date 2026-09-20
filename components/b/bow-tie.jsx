import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e04hdhpze.css';
import '../../css/x/x8uh9p1oi.css';
import '../../css/w/wg89cg8aj.css';
import '../../css/k/k25w-sbgv.css';
import '../../css/j/jd8yvc5_g.css';
import '../../css/k/k8bpgfzqt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e04hdhpze"/><path class="x8uh9p1oi"/><path clip-rule="evenodd" class="wg89cg8aj"/><path class="k25w-sbgv"/><path class="jd8yvc5_g"/><path class="k8bpgfzqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bow-tie"} {...others} />);
}

export default Component;
