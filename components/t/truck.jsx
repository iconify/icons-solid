import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdfrzoi2g.css';
import '../../css/a/a0ho84xfv.css';
import '../../css/f/ftjyt3b6q.css';
import '../../css/a/a459qj40t.css';
import '../../css/h/hz0zevbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zdfrzoi2g"/><path class="a0ho84xfv"/><circle transform="rotate(90 6.07 17.52)" class="ftjyt3b6q"/><circle transform="rotate(90 15.93 17.52)" class="a459qj40t"/><path class="hz0zevbjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:truck"} {...others} />);
}

export default Component;
