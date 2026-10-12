import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh467jd4t.css';
import '../../css/c/cm2t7eo0v.css';
import '../../css/e/eqp0u9dpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gh467jd4t"/><rect transform="rotate(165 5.292 3.682)scale(1 -1)" class="cm2t7eo0v"/><path class="eqp0u9dpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cards"} {...others} />);
}

export default Component;
