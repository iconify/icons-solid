import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m6g7--bll.css';
import '../../css/x/xgygxmptz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m6g7--bll"/><path class="xgygxmptz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-turn-backward"} {...others} />);
}

export default Component;
