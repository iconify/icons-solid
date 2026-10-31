import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k5mo-z1yj.css';
import '../../css/q/qzz-aac-x.css';
import '../../css/k/k87-x69om.css';
import '../../css/f/fus5-kbeu.css';
import '../../css/h/hhi411aot.css';
import '../../css/z/z2ehvrb6u.css';
import '../../css/c/ctsaatb5t.css';
import '../../css/o/o9d50ab3z.css';
import '../../css/n/nqwig4l3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="k5mo-z1yj wm-shadow"/><path class="qzz-aac-x wm-s"/><path class="k87-x69om wm-shadow"/><path class="fus5-kbeu"/><path class="hhi411aot"/><path class="z2ehvrb6u"/><path class="ctsaatb5t wm-s"/><path class="o9d50ab3z wm-s"/><path class="nqwig4l3i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mistletoe"} {...others} />);
}

export default Component;
