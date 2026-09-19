import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/njny9tb1g.css';
import '../../css/k/k710rqb2o.css';
import '../../css/l/lnitt9mus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="njny9tb1g"/><path class="k710rqb2o"/><path class="lnitt9mus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ds-3-tool"} {...others} />);
}

export default Component;
