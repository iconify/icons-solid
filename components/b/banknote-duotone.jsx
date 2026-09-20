import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rk_xybcdo.css';
import '../../css/r/rnmmgzb7q.css';
import '../../css/d/dbth34zxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rk_xybcdo"/><path class="rnmmgzb7q"/><path clip-rule="evenodd" class="dbth34zxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:banknote-duotone"} {...others} />);
}

export default Component;
