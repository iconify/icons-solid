import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r3mm1bcmi.css';
import '../../css/h/hoqlw_box.css';
import '../../css/c/cqvfmjbtu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="r3mm1bcmi"/><path class="hoqlw_box"/><path class="cqvfmjbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:handwashing"} {...others} />);
}

export default Component;
