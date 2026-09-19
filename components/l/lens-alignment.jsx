import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovfmzcbna.css';
import '../../css/f/fnma71b8m.css';
import '../../css/j/ju9_7ns6i.css';
import '../../css/q/qdgtb3b3t.css';
import '../../css/c/c5s7x0oqw.css';
import '../../css/t/t960wyh7q.css';
import '../../css/j/jhazraclt.css';
import '../../css/d/dz5n3eunt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ovfmzcbna"/><path class="fnma71b8m"/><path class="ju9_7ns6i"/><path class="qdgtb3b3t"/><path class="c5s7x0oqw"/><path class="t960wyh7q"/><path class="jhazraclt"/><path class="dz5n3eunt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lens-alignment"} {...others} />);
}

export default Component;
