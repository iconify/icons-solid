import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fvi966b2b.css';
import '../../css/m/myp7lhbii.css';
import '../../css/a/a32h-obdx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="fvi966b2b"/><path class="myp7lhbii"/><path class="a32h-obdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-italic"} {...others} />);
}

export default Component;
