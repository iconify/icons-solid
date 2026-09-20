import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/q1cp6abjp.css';
import '../../css/h/hh53wq2-j.css';
import '../../css/a/ad-zj5byh.css';
import '../../css/h/h5i1cwb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="q1cp6abjp"/><path class="hh53wq2-j"/><path class="ad-zj5byh"/><path class="h5i1cwb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ticket-star"} {...others} />);
}

export default Component;
