import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l91nai2hu.css';
import '../../css/r/rjvz35b7b.css';
import '../../css/p/pmsq_eg4h.css';
import '../../css/h/hrcz5pbil.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l91nai2hu"/><path clip-rule="evenodd" class="rjvz35b7b"/><path clip-rule="evenodd" class="pmsq_eg4h"/><path clip-rule="evenodd" class="hrcz5pbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:burrito-fastfood-flat"} {...others} />);
}

export default Component;
