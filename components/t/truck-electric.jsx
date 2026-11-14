import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/awdo0w7_l.css';
import '../../css/w/w0ggf-zis.css';
import '../../css/p/paigngb6y.css';
import '../../css/x/xt409c-oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="awdo0w7_l"/><circle class="w0ggf-zis"/><circle class="paigngb6y"/><path class="xt409c-oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:truck-electric"} {...others} />);
}

export default Component;
