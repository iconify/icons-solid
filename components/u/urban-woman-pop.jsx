import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0-0jxdnj.css';
import '../../css/p/pittcqb3u.css';
import '../../css/e/eoh8kpb9z.css';
import '../../css/t/tv-6scbpb.css';
import '../../css/r/r_-d6zl-v.css';
import '../../css/l/losb_8b9f.css';
import '../../css/a/a1b0pneqp.css';
import '../../css/a/a3y58zt-p.css';
import '../../css/c/c5k8hsbzs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q0-0jxdnj"/><path class="pittcqb3u"/><path clip-rule="evenodd" class="eoh8kpb9z"/><path clip-rule="evenodd" class="tv-6scbpb"/><path class="r_-d6zl-v"/><path class="losb_8b9f"/><path class="a1b0pneqp"/><path class="a3y58zt-p"/><path clip-rule="evenodd" class="c5k8hsbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:urban-woman-pop"} {...others} />);
}

export default Component;
