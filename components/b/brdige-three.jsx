import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/ydeugkbob.css';
import '../../css/u/umtsztb2x.css';
import '../../css/f/f64a49b2p.css';
import '../../css/j/jr9v2-bwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ydeugkbob"/><path class="umtsztb2x"/><path class="f64a49b2p"/><path class="jr9v2-bwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:brdige-three"} {...others} />);
}

export default Component;
