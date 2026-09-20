import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruwdnobqe.css';
import '../../css/o/ojwajdysm.css';
import '../../css/g/gwmuoobzy.css';
import '../../css/d/dqiahg09j.css';
import '../../css/l/lco2wyxlj.css';
import '../../css/r/r0t4yq7cx.css';
import '../../css/j/jq2eogb9d.css';
import '../../css/o/opt0w_bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ruwdnobqe"/><path class="ojwajdysm"/><path class="gwmuoobzy"/><path class="dqiahg09j"/><path class="lco2wyxlj"/><path class="r0t4yq7cx"/><path class="jq2eogb9d"/><path class="opt0w_bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-shredder-1"} {...others} />);
}

export default Component;
