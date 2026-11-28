import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b1ov2uh1u.css';
import '../../css/q/qam7hgbcr.css';
import '../../css/f/famauqsfu.css';
import '../../css/s/snebnhapy.css';
import '../../css/c/c8aq6bbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b1ov2uh1u"/><path class="qam7hgbcr"/><path class="famauqsfu"/><path class="snebnhapy"/><path class="c8aq6bbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:low-bandwidth"} {...others} />);
}

export default Component;
