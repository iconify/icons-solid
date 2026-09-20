import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojrm5vb_s.css';
import '../../css/s/stjhr4b3l.css';
import '../../css/b/b3elz1bwm.css';
import '../../css/d/dx71a6bhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ojrm5vb_s"/><path class="stjhr4b3l"/><path class="b3elz1bwm"/><path class="dx71a6bhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-2"} {...others} />);
}

export default Component;
