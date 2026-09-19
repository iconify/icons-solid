import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p22yetmsi.css';
import '../../css/o/oe7n0nbcu.css';
import '../../css/d/dbknegbze.css';
import '../../css/x/xv7wunbjl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="p22yetmsi"/><path class="oe7n0nbcu"/><path class="dbknegbze"/><path class="xv7wunbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gamepad-duo"} {...others} />);
}

export default Component;
