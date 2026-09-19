import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rp1xwe1-z.css';
import '../../css/w/wi90qc0tn.css';
import '../../css/g/gjzxlrd4t.css';
import '../../css/f/f9a5_u-iz.css';
import '../../css/j/jce98cbsi.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rp1xwe1-z"/><path class="wi90qc0tn"/><path class="gjzxlrd4t"/><path class="f9a5_u-iz"/><path class="jce98cbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:trophy"} {...others} />);
}

export default Component;
