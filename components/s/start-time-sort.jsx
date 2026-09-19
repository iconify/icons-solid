import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/o/ojvxlobwa.css';
import '../../css/q/qhatdibys.css';
import '../../css/s/s2p4zacxn.css';
import '../../css/o/oyh43sbch.css';
import '../../css/x/xv_9s9btw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="ojvxlobwa"/><path class="qhatdibys"/><path class="s2p4zacxn"/><path class="oyh43sbch"/><path class="xv_9s9btw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:start-time-sort"} {...others} />);
}

export default Component;
