import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/p/pr0chacef.css';
import '../../css/y/y3fiynb0t.css';
import '../../css/f/fz9a3kbpd.css';
import '../../css/z/zo1p7lbmb.css';
import '../../css/y/yhupi7jmw.css';
import '../../css/i/i-wtopb-g.css';
import '../../css/g/gaeg5eccy.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="pr0chacef"><path class="y3fiynb0t"/><path class="fz9a3kbpd"/><path class="zo1p7lbmb"/></g><path clip-rule="evenodd" class="yhupi7jmw"/><path clip-rule="evenodd" class="i-wtopb-g"/><path clip-rule="evenodd" class="gaeg5eccy"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:code-circle-off"} {...others} />);
}

export default Component;
