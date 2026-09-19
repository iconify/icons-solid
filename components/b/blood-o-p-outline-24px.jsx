import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eqvg89l9a.css';
import '../../css/e/e-f139s-v.css';
import '../../css/d/d32b8dbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eqvg89l9a"/><path class="e-f139s-v"/><path clip-rule="evenodd" class="d32b8dbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-o-p-outline-24px"} {...others} />);
}

export default Component;
