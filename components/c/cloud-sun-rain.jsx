import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mz-0mbz4s.css';
import '../../css/n/nfg_d6b8i.css';
import '../../css/t/t3llp34em.css';
import '../../css/c/cppgcnbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mz-0mbz4s wm-k"/><path class="nfg_d6b8i"/><path class="t3llp34em"/><path class="cppgcnbkj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-sun-rain"} {...others} />);
}

export default Component;
