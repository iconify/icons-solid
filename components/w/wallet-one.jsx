import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvkzdkbth.css';
import '../../css/j/jiqqgjbyl.css';
import '../../css/q/qdwhrdl3w.css';
import '../../css/z/zwmgmbqzr.css';
import '../../css/r/r7k436bkt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="mvkzdkbth"/><rect class="jiqqgjbyl"/><path class="qdwhrdl3w"/><path class="zwmgmbqzr"/><circle class="r7k436bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wallet-one"} {...others} />);
}

export default Component;
