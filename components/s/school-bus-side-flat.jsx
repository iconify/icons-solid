import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jh_a0sb0b.css';
import '../../css/w/wh05aebjl.css';
import '../../css/z/z18o22bvt.css';
import '../../css/e/e5m0mcckc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jh_a0sb0b"/><path clip-rule="evenodd" class="wh05aebjl"/><path class="z18o22bvt"/><path clip-rule="evenodd" class="e5m0mcckc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:school-bus-side-flat"} {...others} />);
}

export default Component;
