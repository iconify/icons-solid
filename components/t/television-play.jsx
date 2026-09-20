import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/r/r5abxlgoq.css';
import '../../css/x/x1gs_6bce.css';
import '../../css/g/grbczychx.css';
import '../../css/j/jg97ilkre.css';
import '../../css/i/il0hwjnhw.css';
import '../../css/w/w-_7y_bds.css';
import '../../css/b/bcw8vgbgs.css';
import '../../css/k/kxrlahbnk.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="r5abxlgoq"/><path class="x1gs_6bce"/><path class="grbczychx"/><path class="jg97ilkre"/></g><path class="il0hwjnhw"/><path class="w-_7y_bds"/><path class="bcw8vgbgs"/><path class="kxrlahbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:television-play"} {...others} />);
}

export default Component;
