import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/osjc_s7am.css';
import '../../css/l/l_1sesbbk.css';
import '../../css/s/seo7wx-_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="osjc_s7am"/><path class="l_1sesbbk"/><path class="seo7wx-_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radial"} {...others} />);
}

export default Component;
