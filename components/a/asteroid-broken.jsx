import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s_2vhhbre.css';
import '../../css/r/r0co290mr.css';
import '../../css/v/vdr2_oflg.css';
import '../../css/f/fn05xqh8q.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s_2vhhbre"/><path class="r0co290mr"/><path class="vdr2_oflg"/><path class="fn05xqh8q"/><path class="ko6o-6b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:asteroid-broken"} {...others} />);
}

export default Component;
