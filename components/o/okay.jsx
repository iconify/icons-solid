import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kqhf4_bau.css';
import '../../css/i/i1mmz4b4v.css';
import '../../css/q/qqn688m2h.css';
import '../../css/i/i8ae22bkh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kqhf4_bau"/><path class="i1mmz4b4v"/><path class="qqn688m2h"/><path class="i8ae22bkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:okay"} {...others} />);
}

export default Component;
