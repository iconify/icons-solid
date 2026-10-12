import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdfrzoi2g.css';
import '../../css/i/id9k9pb9j.css';
import '../../css/f/ftjyt3b6q.css';
import '../../css/a/a459qj40t.css';
import '../../css/m/m1hfk5bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zdfrzoi2g"/><path class="id9k9pb9j"/><circle transform="rotate(90 6.07 17.52)" class="ftjyt3b6q"/><circle transform="rotate(90 15.93 17.52)" class="a459qj40t"/><path class="m1hfk5bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ambulance"} {...others} />);
}

export default Component;
