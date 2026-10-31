import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdan5fbgb.css';
import '../../css/l/ldhgq_bhs.css';
import '../../css/d/d5f2c0bgw.css';
import '../../css/r/rkr040beh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="mdan5fbgb"/><rect class="ldhgq_bhs"/><rect class="d5f2c0bgw"/><rect class="rkr040beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:palette"} {...others} />);
}

export default Component;
