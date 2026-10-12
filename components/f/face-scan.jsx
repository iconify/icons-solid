import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/a/atfj8bbhs.css';
import '../../css/y/y_5hmkbzk.css';
import '../../css/j/j1oqxebwh.css';
import '../../css/g/g1rigr9jp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yn436cvro"/><circle transform="rotate(90 12 12)" class="atfj8bbhs"/><circle transform="rotate(90 12 12)" class="y_5hmkbzk"/><path class="j1oqxebwh"/><path class="g1rigr9jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-scan"} {...others} />);
}

export default Component;
