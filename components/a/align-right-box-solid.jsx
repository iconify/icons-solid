import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzsqvm3vy.css';
import '../../css/m/mqc-ygb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dzsqvm3vy"/><path class="mqc-ygb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-right-box-solid"} {...others} />);
}

export default Component;
