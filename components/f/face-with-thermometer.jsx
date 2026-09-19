import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un0ereh_j.css';
import '../../css/m/mtqz54blb.css';
import '../../css/k/kwb0eqb1f.css';
import '../../css/e/ecod6xbei.css';
import '../../css/n/nn8-zjbyv.css';
import '../../css/e/ebdtaeb6o.css';
import '../../css/t/tuddp4bvc.css';
import '../../css/w/wx-0lkb7j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="un0ereh_j"/><path class="mtqz54blb"/><path class="kwb0eqb1f"/><path class="ecod6xbei"/><path class="nn8-zjbyv"/><path class="ebdtaeb6o"/><path class="tuddp4bvc"/><path class="wx-0lkb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:face-with-thermometer"} {...others} />);
}

export default Component;
