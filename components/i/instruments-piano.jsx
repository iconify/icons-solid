import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/u/u65vn6brm.css';
import '../../css/g/ge22wcspb.css';
import '../../css/y/y5mvbgbxa.css';
import '../../css/k/kcqb6wbpg.css';
import '../../css/m/mse8sib4c.css';
import '../../css/j/jcharbb2x.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="u65vn6brm"/><path class="ge22wcspb"/><path class="y5mvbgbxa"/><path class="kcqb6wbpg"/><path class="mse8sib4c"/><path class="jcharbb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:instruments-piano"} {...others} />);
}

export default Component;
