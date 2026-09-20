import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mna_yydkl.css';
import '../../css/a/aqfsm3bvb.css';
import '../../css/n/n384eg6-o.css';
import '../../css/o/omgun3cyf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mna_yydkl"/><path class="aqfsm3bvb"/><path class="n384eg6-o"/><path class="omgun3cyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hierarchy-14"} {...others} />);
}

export default Component;
