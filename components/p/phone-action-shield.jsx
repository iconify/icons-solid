import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g91n52bob.css';
import '../../css/v/v4q805n0l.css';
import '../../css/v/vyd_y9bkq.css';
import '../../css/v/v_is92bgu.css';
import '../../css/r/rve5czb1e.css';
import '../../css/a/av55l1zfg.css';
import '../../css/m/m7-0y2bce.css';
import '../../css/d/dg1cstbkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g91n52bob"/><path class="v4q805n0l"/><path class="vyd_y9bkq"/><path class="v_is92bgu"/><path class="rve5czb1e"/><path class="av55l1zfg"/><path class="m7-0y2bce"/><path class="dg1cstbkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:phone-action-shield"} {...others} />);
}

export default Component;
