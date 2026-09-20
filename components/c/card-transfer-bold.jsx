import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gafy37gmj.css';
import '../../css/s/sjlz8xm0b.css';
import '../../css/r/ri_ieprmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gafy37gmj"/><path clip-rule="evenodd" class="sjlz8xm0b"/><path clip-rule="evenodd" class="ri_ieprmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-transfer-bold"} {...others} />);
}

export default Component;
