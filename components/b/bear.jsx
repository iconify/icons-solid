import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wavzmlbog.css';
import '../../css/r/rsfam3bse.css';
import '../../css/w/wszkdmbyl.css';
import '../../css/k/k6j5q39vn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wavzmlbog"/><path class="rsfam3bse"/><path class="wszkdmbyl"/><path class="k6j5q39vn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bear"} {...others} />);
}

export default Component;
