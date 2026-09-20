import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/r/r1xw7kb1y.css';
import '../../css/r/rrq076sgb.css';
import '../../css/w/wxytlubjr.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGBSs4RciS"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="r1xw7kb1y"/><path clip-rule="evenodd" class="rrq076sgb"/><path class="wxytlubjr"/></g></mask></defs><circle mask="url(#SVGBSs4RciS)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:lock-closed-circle-filled"} {...others} />);
}

export default Component;
