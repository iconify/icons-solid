import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wxqivyo1u.css';
import '../../css/l/lx_r95vpd.css';
import '../../css/g/g1z1i765o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wxqivyo1u"/><ellipse class="lx_r95vpd"/><path class="g1z1i765o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:roaming"} {...others} />);
}

export default Component;
