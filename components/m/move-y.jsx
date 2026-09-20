import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/j1yiqcc9g.css';
import '../../css/i/i08v0rbwt.css';
import '../../css/u/uwv3vxe2a.css';
import '../../css/s/sv1h7-gab.css';
import '../../css/b/b16vtrbvf.css';
import '../../css/a/azw0--_-v.css';
import '../../css/k/ki8yqbcwf.css';
import '../../css/v/vjbjg0b1y.css';
import '../../css/s/s-6ff4b-x.css';
import '../../css/n/n2651fbqx.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="j1yiqcc9g"/><path class="i08v0rbwt"/><path class="uwv3vxe2a"/><path class="sv1h7-gab"/><path class="b16vtrbvf"/><path class="azw0--_-v"/></g><path class="ki8yqbcwf"/><path class="vjbjg0b1y"/><path class="s-6ff4b-x"/><path class="n2651fbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:move-y"} {...others} />);
}

export default Component;
