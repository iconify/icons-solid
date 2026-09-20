import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/goxedu8-m.css';
import '../../css/q/qtdl2pk3h.css';
import '../../css/n/nnirq57eg.css';
import '../../css/d/daqja6rxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="goxedu8-m"/><path class="qtdl2pk3h"/><path class="nnirq57eg"/><path class="daqja6rxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:donation-charity-donate-box"} {...others} />);
}

export default Component;
