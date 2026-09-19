import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/o/odamr20hx.css';
import '../../css/y/yeij03jzj.css';
import '../../css/w/wor82wbtf.css';
import '../../css/g/g1v4b8p2w.css';
import '../../css/f/ffffi3bpq.css';
import '../../css/l/lg3tr7bjc.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="odamr20hx"/><path class="yeij03jzj"/><path class="wor82wbtf"/></g><path class="g1v4b8p2w"/><path class="ffffi3bpq"/><path class="lg3tr7bjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-up-print"} {...others} />);
}

export default Component;
