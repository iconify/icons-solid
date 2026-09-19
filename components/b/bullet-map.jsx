import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/n/n7bll8bpo.css';
import '../../css/m/m128wu8fm.css';
import '../../css/f/f74lm8bkt.css';
import '../../css/r/rzc250yng.css';
import '../../css/b/b3-iglbcp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="n7bll8bpo"/><path class="m128wu8fm"/><path class="f74lm8bkt"/><path class="rzc250yng"/><path class="b3-iglbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bullet-map"} {...others} />);
}

export default Component;
