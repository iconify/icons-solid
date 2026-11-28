import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b3fx0ibyl.css';
import '../../css/a/a74o7x3yv.css';
import '../../css/b/b806uvb_j.css';
import '../../css/w/wn33mkbvd.css';
import '../../css/l/lnzvkgb1b.css';
import '../../css/w/wx5s8f0su.css';
import '../../css/j/jcktdxbqe.css';
import '../../css/f/fukx_ql2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b3fx0ibyl"/><circle class="a74o7x3yv"/><path class="b806uvb_j"/><path class="wn33mkbvd"/><path class="lnzvkgb1b"/><path class="wx5s8f0su"/><path class="jcktdxbqe"/><path class="fukx_ql2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:safe"} {...others} />);
}

export default Component;
