import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyu4bac_i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k6gah1b6z.css';
import '../../css/x/xz0lhz9kk.css';
import '../../css/s/s3k2tyt5e.css';
import '../../css/p/pilhyiqtq.css';
import '../../css/v/vr-afyp_c.css';
import '../../css/v/v772s3bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tyu4bac_i"/><g class="dt0cm9dhy primary"><path class="k6gah1b6z"/><path class="xz0lhz9kk"/><path class="s3k2tyt5e"/><path class="pilhyiqtq"/><path class="vr-afyp_c"/><path class="v772s3bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:person-walking-duo"} {...others} />);
}

export default Component;
