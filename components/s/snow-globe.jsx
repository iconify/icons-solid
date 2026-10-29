import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rreb2h9kf.css';
import '../../css/h/hlq699b_b.css';
import '../../css/t/t3jkcci7j.css';
import '../../css/a/az98okbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rreb2h9kf wm-k"/><path class="hlq699b_b wm-a"/><path class="t3jkcci7j wm-k"/><path class="az98okbmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:snow-globe"} {...others} />);
}

export default Component;
