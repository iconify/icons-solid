import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xidyvjbwr.css';
import '../../css/u/ur5tk_hmd.css';
import '../../css/u/uy2b36b8a.css';
import '../../css/r/r-u2atbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xidyvjbwr"/><path class="ur5tk_hmd"/><path class="uy2b36b8a"/><path clip-rule="evenodd" class="r-u2atbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-withdraw"} {...others} />);
}

export default Component;
