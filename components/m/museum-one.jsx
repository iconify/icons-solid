import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/l/lqqlthg3z.css';
import '../../css/h/hx_9wvu-g.css';
import '../../css/v/v6juoxv0n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ii0wlebwq"/><path class="lqqlthg3z"/><path class="hx_9wvu-g"/><path class="v6juoxv0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:museum-one"} {...others} />);
}

export default Component;
