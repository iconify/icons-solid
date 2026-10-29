import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mo7601bhz.css';
import '../../css/q/qir2uyb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mo7601bhz wm-k"/><path class="qir2uyb5g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tooth-crown"} {...others} />);
}

export default Component;
