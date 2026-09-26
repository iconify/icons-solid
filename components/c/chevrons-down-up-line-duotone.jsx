import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfrug7s3s.css';
import '../../css/u/uyjuokbvi.css';
import '../../css/v/vtwk979ug.css';
import '../../css/x/xggl6t9lq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kfrug7s3s"/><path class="uyjuokbvi"/><path class="vtwk979ug"/><path class="xggl6t9lq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-down-up-line-duotone"} {...others} />);
}

export default Component;
