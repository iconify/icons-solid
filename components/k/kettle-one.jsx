import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tt175xbva.css';
import '../../css/v/vlckaelsc.css';
import '../../css/r/r-qbun4my.css';
import '../../css/l/ln9pwybam.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tt175xbva"/><path class="vlckaelsc"/><path class="r-qbun4my"/><path class="ln9pwybam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:kettle-one"} {...others} />);
}

export default Component;
