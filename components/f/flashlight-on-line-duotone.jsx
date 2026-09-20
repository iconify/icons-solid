import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w7zo2z8xz.css';
import '../../css/m/m-6qwhchs.css';
import '../../css/c/c8yk-ww4d.css';
import '../../css/e/e_gtrlm_s.css';
import '../../css/x/xs9hssbnm.css';
import '../../css/u/u3grz3nvt.css';
import '../../css/c/c8uqqubcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w7zo2z8xz"/><path class="m-6qwhchs"/><path class="c8yk-ww4d"/><path class="e_gtrlm_s"/><path class="xs9hssbnm"/><path class="u3grz3nvt"/><path class="c8uqqubcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-on-line-duotone"} {...others} />);
}

export default Component;
