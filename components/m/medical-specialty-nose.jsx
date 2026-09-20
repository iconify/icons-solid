import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5e42eb_s.css';
import '../../css/m/mtb_r_b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s5e42eb_s"/><path class="mtb_r_b3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-specialty-nose"} {...others} />);
}

export default Component;
