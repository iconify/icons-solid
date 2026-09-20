import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/f0lj31bio.css';
import '../../css/n/n8u8vib0c.css';
import '../../css/r/re_5s3b7r.css';
import '../../css/t/tdlddsubd.css';
import '../../css/y/ys1-x_bax.css';
import '../../css/a/acnichwao.css';
import '../../css/d/dvt7l-bye.css';
import '../../css/b/b_drxzbot.css';
import '../../css/q/q6zrlybpu.css';
import '../../css/k/kzhpbebmd.css';
import '../../css/d/dwgs_gdah.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="f0lj31bio"/><path class="n8u8vib0c"/><path clip-rule="evenodd" class="re_5s3b7r"/><path class="tdlddsubd"/><path clip-rule="evenodd" class="ys1-x_bax"/><path class="acnichwao"/><path clip-rule="evenodd" class="dvt7l-bye"/></g><path clip-rule="evenodd" class="b_drxzbot"/><path clip-rule="evenodd" class="q6zrlybpu"/><path clip-rule="evenodd" class="kzhpbebmd"/><path clip-rule="evenodd" class="dwgs_gdah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:sliders"} {...others} />);
}

export default Component;
