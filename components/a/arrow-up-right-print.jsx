import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/y/yz2hzou-y.css';
import '../../css/q/q09fmyuoi.css';
import '../../css/e/e1z6tggnm.css';
import '../../css/q/q6vfpkbxt.css';
import '../../css/y/yjwh0nb-v.css';
import '../../css/v/vzdji6bnp.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="yz2hzou-y"/><path class="q09fmyuoi"/><path class="e1z6tggnm"/></g><path class="q6vfpkbxt"/><path class="yjwh0nb-v"/><path class="vzdji6bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-up-right-print"} {...others} />);
}

export default Component;
