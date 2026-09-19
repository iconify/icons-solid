import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xciwp3fdu.css';
import '../../css/s/skpv2s_fz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xciwp3fdu"/><path class="skpv2s_fz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:phone-check"} {...others} />);
}

export default Component;
