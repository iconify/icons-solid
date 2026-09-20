import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty3omhvwk.css';
import '../../css/r/r6_b4-b2z.css';
import '../../css/q/qhwobdb5c.css';
import '../../css/z/zczqaechp.css';
import '../../css/a/aal2wbblx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ty3omhvwk"/><path class="r6_b4-b2z"/><path clip-rule="evenodd" class="qhwobdb5c"/><path class="zczqaechp"/><path class="aal2wbblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-remove-duotone"} {...others} />);
}

export default Component;
