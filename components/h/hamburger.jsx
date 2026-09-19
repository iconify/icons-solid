import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g8e4yhbtr.css';
import '../../css/r/rqxp98bpz.css';
import '../../css/c/cvayz8bbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="g8e4yhbtr"/><rect class="rqxp98bpz"/><path class="cvayz8bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hamburger"} {...others} />);
}

export default Component;
