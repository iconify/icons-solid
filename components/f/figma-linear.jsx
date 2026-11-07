import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dd5riuc8l.css';
import '../../css/a/a7_qblosi.css';
import '../../css/o/oz2d1bb3e.css';
import '../../css/k/kivsy5bkl.css';
import '../../css/j/jehd3zbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dd5riuc8l"/><path class="a7_qblosi"/><path class="oz2d1bb3e"/><path class="kivsy5bkl"/><path class="jehd3zbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:figma-linear"} {...others} />);
}

export default Component;
