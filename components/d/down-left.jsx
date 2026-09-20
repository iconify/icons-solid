import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/efper0b_o.css';
import '../../css/l/l87812muk.css';
import '../../css/w/wcybux_3z.css';
import '../../css/a/abcwoxbsm.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="efper0b_o"/><path class="l87812muk"/></g><path class="wcybux_3z"/><path class="abcwoxbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:down-left"} {...others} />);
}

export default Component;
