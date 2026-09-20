import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/zyhc4ob-x.css';
import '../../css/e/exrhwhtnu.css';
import '../../css/v/vi-yg5enu.css';
import '../../css/t/txlqvcbnr.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGbLBNcbLs"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="zyhc4ob-x"/><path clip-rule="evenodd" class="exrhwhtnu"/><path class="vi-yg5enu"/><path class="txlqvcbnr"/></g></mask></defs><circle mask="url(#SVGbLBNcbLs)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:controller-circle-filled"} {...others} />);
}

export default Component;
