import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_7khxbol.css';
import '../../css/z/z9d523bzi.css';
import '../../css/s/skp8tjssj.css';
import '../../css/o/ojrw9tb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o_7khxbol"/><path class="z9d523bzi"/><path class="skp8tjssj"/><path class="ojrw9tb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-lock-duotone"} {...others} />);
}

export default Component;
