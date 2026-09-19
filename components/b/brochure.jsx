import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/b/bwa292bqf.css';
import '../../css/d/dclgn8fcj.css';
import '../../css/d/dfln0t_dt.css';
import '../../css/i/it10wd3to.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="bwa292bqf"/><path class="dclgn8fcj"/><path class="dfln0t_dt"/><path class="it10wd3to"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:brochure"} {...others} />);
}

export default Component;
