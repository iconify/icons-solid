import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvlt2j0fe.css';
import '../../css/d/dvsjuibmy.css';
import '../../css/j/jll1rlbdh.css';
import '../../css/i/irij60t6g.css';
import '../../css/d/disrhiqgi.css';
import '../../css/i/iisff-bfr.css';
import '../../css/e/elnyyabtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dvlt2j0fe"/><circle class="dvsjuibmy"/><circle class="jll1rlbdh"/><circle class="irij60t6g"/><circle class="disrhiqgi"/><circle class="iisff-bfr"/><circle class="elnyyabtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-fork"} {...others} />);
}

export default Component;
