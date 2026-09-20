import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqno2mbyz.css';
import '../../css/w/w-prnrbmy.css';
import '../../css/z/zwf-vmbvs.css';
import '../../css/v/vvm6iie5s.css';
import '../../css/z/z-2dytbry.css';
import '../../css/e/encodpcyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pqno2mbyz"/><path class="w-prnrbmy"/><path class="zwf-vmbvs"/><path class="vvm6iie5s"/><path class="z-2dytbry"/><path class="encodpcyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-instrument-ambulance-bed"} {...others} />);
}

export default Component;
