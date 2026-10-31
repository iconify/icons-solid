import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s9-5wz0oz.css';
import '../../css/s/siey5uuhn.css';
import '../../css/g/gx5j3vbxc.css';
import '../../css/k/k36tdbb9n.css';
import '../../css/u/u_fbiizfu.css';
import '../../css/e/e5b8b5b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s9-5wz0oz wm-shadow"/><path class="siey5uuhn wm-shadow"/><path class="gx5j3vbxc"/><path class="k36tdbb9n"/><path class="u_fbiizfu"/><path class="e5b8b5b5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:share"} {...others} />);
}

export default Component;
