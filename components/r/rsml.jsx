import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sc7llmbau.css';
import '../../css/q/qqla5kiga.css';
import '../../css/g/ggxjm7kih.css';
import '../../css/v/vxpb2ab3q.css';
import '../../css/a/ay3no6bba.css';
import '../../css/f/ff_7sy2mn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="sc7llmbau"/><path class="qqla5kiga"/><path class="ggxjm7kih"/><path class="vxpb2ab3q"/><path class="ay3no6bba"/><path class="ff_7sy2mn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rsml"} {...others} />);
}

export default Component;
