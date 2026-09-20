import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slj05mclm.css';
import '../../css/j/j2vlz6i-e.css';
import '../../css/i/ijrg4ewdu.css';
import '../../css/g/gnk34ph4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="slj05mclm"/><path clip-rule="evenodd" class="j2vlz6i-e"/><path class="ijrg4ewdu"/><path class="gnk34ph4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-cart-trolley-check"} {...others} />);
}

export default Component;
