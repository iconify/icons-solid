import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/d1bttp38j.css';
import '../../css/k/kub41zb1x.css';
import '../../css/f/fa_233xfu.css';
import '../../css/q/qnk6pqbho.css';
import '../../css/b/bw3ectbcu.css';
import '../../css/j/j8yiq-_2w.css';
import '../../css/i/iuho8vbxp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="d1bttp38j"/><path class="kub41zb1x"/><path class="fa_233xfu"/><path class="qnk6pqbho"/><path class="bw3ectbcu"/><circle class="j8yiq-_2w"/><path class="iuho8vbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-user"} {...others} />);
}

export default Component;
