import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rj20lpbsw.css';
import '../../css/x/xjo2_zb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rj20lpbsw"/><path class="xjo2_zb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:css"} {...others} />);
}

export default Component;
