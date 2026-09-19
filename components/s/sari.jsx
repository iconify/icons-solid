import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbvkg5flj.css';
import '../../css/f/fafqcxb4y.css';
import '../../css/h/hrzf_8aqk.css';
import '../../css/h/he-j--bth.css';
import '../../css/q/qtyvufbuv.css';
import '../../css/e/ec3cphbka.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qbvkg5flj"/><path class="fafqcxb4y"/><path class="hrzf_8aqk"/><path class="he-j--bth"/><path class="qtyvufbuv"/><path class="ec3cphbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sari"} {...others} />);
}

export default Component;
