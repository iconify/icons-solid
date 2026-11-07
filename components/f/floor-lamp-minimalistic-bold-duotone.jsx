import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5jjfybut.css';
import '../../css/x/xud1jdrvj.css';
import '../../css/w/wi29n-blt.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/muk10suzx.css';
import '../../css/y/y50g8dd4e.css';
import '../../css/x/xzxl5tpyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5jjfybut"/><path class="xud1jdrvj"/><path class="wi29n-blt"/><g class="xtpeb-edw"><path class="muk10suzx"/><path class="y50g8dd4e"/><path class="xzxl5tpyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
