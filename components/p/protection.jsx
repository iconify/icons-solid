import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kmql86b4y.css';
import '../../css/x/xx16e09lg.css';
import '../../css/u/urcvvqb_d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="kmql86b4y"/><path class="xx16e09lg"/><path class="urcvvqb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:protection"} {...others} />);
}

export default Component;
