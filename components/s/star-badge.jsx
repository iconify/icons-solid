import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kky0_dk-t.css';
import '../../css/r/rxr6r4b-f.css';
import '../../css/j/j0y3tobst.css';
import '../../css/o/oaj58eb4c.css';
import '../../css/s/slxrl0bgr.css';
import '../../css/o/o2dd91b0l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kky0_dk-t"/><path class="rxr6r4b-f"/><path class="j0y3tobst"/><path class="oaj58eb4c"/><path class="slxrl0bgr"/><path class="o2dd91b0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:star-badge"} {...others} />);
}

export default Component;
