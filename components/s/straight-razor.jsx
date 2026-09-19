import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gnjsnbw1b.css';
import '../../css/u/u4xffmxub.css';
import '../../css/u/uowhjz5bn.css';
import '../../css/o/odcne5nfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect transform="rotate(-10 3.61 36.534)" class="gnjsnbw1b"/><path class="u4xffmxub"/><path class="uowhjz5bn"/><path class="odcne5nfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:straight-razor"} {...others} />);
}

export default Component;
