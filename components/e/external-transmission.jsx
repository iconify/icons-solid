import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rlyb_beyp.css';
import '../../css/n/nqszg3bby.css';
import '../../css/r/rrulitb_l.css';
import '../../css/l/ljoi5lzeg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rlyb_beyp"/><path class="nqszg3bby"/><path class="rrulitb_l"/><path class="ljoi5lzeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:external-transmission"} {...others} />);
}

export default Component;
