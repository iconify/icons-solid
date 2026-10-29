import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vppex3q9g.css';
import '../../css/o/oerg6hb2z.css';
import '../../css/o/orgv1obkj.css';
import '../../css/a/a8f4nq6ud.css';
import '../../css/f/f9z9tgbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vppex3q9g wm-k"/><path class="oerg6hb2z wm-k"/><path class="orgv1obkj wm-k"/><path class="a8f4nq6ud wm-shine"/><path class="f9z9tgbch wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:hand"} {...others} />);
}

export default Component;
