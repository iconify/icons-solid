import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nhhjpt21o.css';
import '../../css/k/kosv92b2z.css';
import '../../css/l/lo7mucdnd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="nhhjpt21o"/><path class="kosv92b2z"/><circle class="lo7mucdnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:u-turn-left"} {...others} />);
}

export default Component;
