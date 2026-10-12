import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y34sjbc0t.css';
import '../../css/m/mq_t5hpku.css';
import '../../css/n/ncbo5jbvq.css';
import '../../css/z/zbws-syos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y34sjbc0t"/><circle transform="rotate(90 11.98 12)" class="mq_t5hpku"/><circle transform="rotate(90 11.98 12)" class="ncbo5jbvq"/><path class="zbws-syos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:life-buoy"} {...others} />);
}

export default Component;
