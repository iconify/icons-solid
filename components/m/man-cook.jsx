import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z89hgybfn.css';
import '../../css/g/gj_8sqroa.css';
import '../../css/v/v_2567bcy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="z89hgybfn"/><path class="gj_8sqroa"/><path class="v_2567bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-cook"} {...others} />);
}

export default Component;
