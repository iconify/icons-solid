import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lsj8sgb-n.css';
import '../../css/w/wn0wd7b4u.css';
import '../../css/a/ahjrmcckh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="lsj8sgb-n"/><path class="wn0wd7b4u"/><path class="ahjrmcckh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:personal-collection"} {...others} />);
}

export default Component;
