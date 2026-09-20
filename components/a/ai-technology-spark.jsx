import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0e42sdas.css';
import '../../css/g/goe_-5btt.css';
import '../../css/n/n9d86wlpu.css';
import '../../css/j/jf-o-sfic.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r0e42sdas"/><path class="goe_-5btt"/><path class="n9d86wlpu"/><path class="jf-o-sfic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-technology-spark"} {...others} />);
}

export default Component;
