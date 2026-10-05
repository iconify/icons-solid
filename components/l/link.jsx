import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/v9v326bye.css';
import '../../css/e/ere_u2hzb.css';
import '../../css/r/r4796eb0s.css';
import '../../css/s/sqkz918vr.css';
import '../../css/k/kb3puyurx.css';
import '../../css/n/n2jgv0y1t.css';
import '../../css/z/zykc-6bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="v9v326bye"/><path class="ere_u2hzb"/><path class="r4796eb0s"/><path class="sqkz918vr"/><path class="kb3puyurx"/><path class="n2jgv0y1t"/><path class="zykc-6bpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:link"} {...others} />);
}

export default Component;
