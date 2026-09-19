import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4awvr3zz.css';
import '../../css/b/b6vzku72j.css';
import '../../css/i/i2_1hbjoh.css';
import '../../css/w/wktpslbno.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n4awvr3zz"/><path class="b6vzku72j"/><path clip-rule="evenodd" class="i2_1hbjoh"/><path class="wktpslbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:community-healthworker-outline"} {...others} />);
}

export default Component;
