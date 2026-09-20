import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdofu6zwt.css';
import '../../css/o/obu0swb-v.css';
import '../../css/k/k9pq-abme.css';
import '../../css/a/a_w7ez_1h.css';
import '../../css/y/yl2jg2jca.css';
import '../../css/v/v1xr-6b9l.css';
import '../../css/e/ey28gl-ak.css';
import '../../css/s/s4b5i6bac.css';
import '../../css/q/qny_83bvx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hdofu6zwt"/><path class="obu0swb-v"/><g class="k9pq-abme"><path class="a_w7ez_1h"/><path class="yl2jg2jca"/></g><path class="v1xr-6b9l"/><path class="ey28gl-ak"/><path class="s4b5i6bac"/><path class="qny_83bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-facepalming-medium-skin-tone"} {...others} />);
}

export default Component;
