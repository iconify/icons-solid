import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2_n4rb-e.css';
import '../../css/i/isheuc-qp.css';
import '../../css/r/r9k2-n4dv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a2_n4rb-e"/><path class="isheuc-qp"/><path class="r9k2-n4dv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:volleyball2-duotone"} {...others} />);
}

export default Component;
