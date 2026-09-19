import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wraz8bb6y.css';
import '../../css/g/gnawheb3g.css';
import '../../css/u/un26xhoct.css';
import '../../css/i/i95-9mb7t.css';
import '../../css/b/bn8w5ccww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wraz8bb6y"/><path class="gnawheb3g"/><path class="un26xhoct"/><path class="i95-9mb7t"/><path class="bn8w5ccww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rocking-horse"} {...others} />);
}

export default Component;
