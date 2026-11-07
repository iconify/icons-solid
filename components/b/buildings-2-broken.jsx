import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/z/z-dxw3bya.css';
import '../../css/s/suhy-dbax.css';
import '../../css/c/cchpq1djo.css';
import '../../css/x/x-21zwayg.css';
import '../../css/b/bd1q7zbzn.css';
import '../../css/p/pm28f0dxx.css';
import '../../css/a/aysaofbup.css';
import '../../css/f/f5spxzclx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="z-dxw3bya"/><path class="suhy-dbax"/><path class="cchpq1djo"/><path class="x-21zwayg"/><path class="bd1q7zbzn"/><path class="pm28f0dxx"/><path class="aysaofbup"/><path class="f5spxzclx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-2-broken"} {...others} />);
}

export default Component;
