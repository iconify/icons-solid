import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jm-k66bow.css';
import '../../css/x/x5oirc9_t.css';
import '../../css/h/h9ralgbvu.css';
import '../../css/n/n3chyxi_g.css';
import '../../css/p/pza4mgbif.css';
import '../../css/i/irot2obsf.css';
import '../../css/r/rcx-i0l0p.css';
import '../../css/r/r9em9fbvs.css';
import '../../css/y/yuun2ebul.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="n1mjunbsu"><path class="jm-k66bow"/><circle class="x5oirc9_t"/><circle transform="scale(-1 1)" class="h9ralgbvu"/></g><path class="n3chyxi_g"/><circle class="pza4mgbif"/><circle class="irot2obsf"/><circle class="rcx-i0l0p"/><circle transform="rotate(169.46)scale(1 -1)" class="r9em9fbvs"/><circle transform="rotate(169.46)scale(1 -1)" class="yuun2ebul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:speech-balloon"} {...others} />);
}

export default Component;
