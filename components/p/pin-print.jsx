import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/f/fyadog1fy.css';
import '../../css/b/bn0727bsj.css';
import '../../css/b/b4gx28wsb.css';
import '../../css/h/hx_r2fyou.css';
import '../../css/h/hrk0uz-3b.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="fyadog1fy"/><path class="bn0727bsj"/><path class="b4gx28wsb"/></g><path class="hx_r2fyou"/><path class="hrk0uz-3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:pin-print"} {...others} />);
}

export default Component;
