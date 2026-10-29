import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/my6rj4b_w.css';
import '../../css/c/cw7c9mhiu.css';
import '../../css/k/kk6-mge6m.css';
import '../../css/t/tbtdffcfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="my6rj4b_w wm-k"/><path class="cw7c9mhiu wm-s"/><path class="kk6-mge6m"/><path class="tbtdffcfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:notebook-pen"} {...others} />);
}

export default Component;
