import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vso0-xb8v.css';
import '../../css/t/tlqhltbmw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vso0-xb8v"/><path class="tlqhltbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:double-up"} {...others} />);
}

export default Component;
