import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k0l07qbna.css';
import '../../css/a/al-whqb_a.css';
import '../../css/j/j8asiur5l.css';
import '../../css/u/ujtbxbctu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k0l07qbna wm-k"/><path class="al-whqb_a wm-a"/><path class="j8asiur5l wm-k"/><path class="ujtbxbctu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radio-tower-sketch"} {...others} />);
}

export default Component;
