import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i00bmr7ot.css';
import '../../css/f/fv3l_rq4r.css';
import '../../css/w/wgi3edvsq.css';
import '../../css/m/mqqdcl91y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i00bmr7ot"/><path class="fv3l_rq4r"/><path class="wgi3edvsq"/><path class="mqqdcl91y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-question"} {...others} />);
}

export default Component;
