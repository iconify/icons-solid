import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmzz96bmf.css';
import '../../css/o/o57sxb6nv.css';
import '../../css/r/r8pl9hbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mmzz96bmf"/><path clip-rule="evenodd" class="o57sxb6nv"/><path class="r8pl9hbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-wide-duotone"} {...others} />);
}

export default Component;
