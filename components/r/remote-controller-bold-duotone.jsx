import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c37wdnbmk.css';
import '../../css/g/gd_k_uymo.css';
import '../../css/a/ari5y--3d.css';
import '../../css/j/j2j18nbgy.css';
import '../../css/m/m7gedvb5g.css';
import '../../css/v/vpdbzqbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c37wdnbmk"/><path clip-rule="evenodd" class="gd_k_uymo"/><path class="ari5y--3d"/><path class="j2j18nbgy"/><path class="m7gedvb5g"/><path class="vpdbzqbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-bold-duotone"} {...others} />);
}

export default Component;
