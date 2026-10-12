import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vardse6tq.css';
import '../../css/b/bsj9keaai.css';
import '../../css/v/vuug3s_lo.css';
import '../../css/p/p1ns_5qgu.css';
import '../../css/o/our4syduu.css';
import '../../css/b/bitjtcc9f.css';
import '../../css/i/ikivtc0ky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(30 9.34 6.83)" class="vardse6tq"/><circle transform="rotate(30 17.3 12.81)" class="bsj9keaai"/><circle transform="rotate(30 8.43 15.23)" class="vuug3s_lo"/><circle transform="rotate(30 9.34 6.83)" class="p1ns_5qgu"/><circle transform="rotate(30 17.5 12.93)" class="our4syduu"/><circle transform="rotate(30 8.43 15.23)" class="bitjtcc9f"/><path class="ikivtc0ky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-bubble"} {...others} />);
}

export default Component;
