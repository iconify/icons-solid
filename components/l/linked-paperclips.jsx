import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti92cbmei.css';
import '../../css/y/y_g29ma4v.css';
import '../../css/e/e_ttht3ap.css';
import '../../css/m/m56q2cczf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ti92cbmei"/><path class="y_g29ma4v"/><path class="e_ttht3ap"/><path class="m56q2cczf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:linked-paperclips"} {...others} />);
}

export default Component;
