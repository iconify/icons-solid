import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/md4gg0b9v.css';
import '../../css/y/ydhobwxud.css';
import '../../css/l/lmazhrbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="md4gg0b9v"/><path class="ydhobwxud"/><path class="lmazhrbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chrome"} {...others} />);
}

export default Component;
