import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/v/vr067pysy.css';
import '../../css/x/xatq112wr.css';
import '../../css/g/g2bu6rkjq.css';
import '../../css/k/k_t-tq31f.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/otdeddcxm.css';
import '../../css/a/asa2o8brz.css';
import '../../css/r/rys0_db9f.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="vr067pysy"/><path class="xatq112wr"/><path class="g2bu6rkjq"/><path class="k_t-tq31f"/></g><g class="ij2x_72vy"><path class="otdeddcxm"/><path class="asa2o8brz"/><path class="rys0_db9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:floppy-disk"} {...others} />);
}

export default Component;
