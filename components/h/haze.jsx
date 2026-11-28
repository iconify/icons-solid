import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v4enu2byu.css';
import '../../css/x/xfodf0u2y.css';
import '../../css/p/p0kg29bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v4enu2byu"/><path class="xfodf0u2y"/><path class="p0kg29bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:haze"} {...others} />);
}

export default Component;
