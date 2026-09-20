import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbtnanbbz.css';
import '../../css/h/hnnvi03bs.css';
import '../../css/x/xw87_lb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gbtnanbbz"/><path clip-rule="evenodd" class="hnnvi03bs"/><path class="xw87_lb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shop2-duotone"} {...others} />);
}

export default Component;
