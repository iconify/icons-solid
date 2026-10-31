import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nize2cc_h.css';
import '../../css/n/ndzszkbcg.css';
import '../../css/u/urzhw0bem.css';
import '../../css/q/qhof2qz4d.css';
import '../../css/u/u3ijpsbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nize2cc_h wm-shadow"/><path class="ndzszkbcg"/><path class="urzhw0bem"/><path class="qhof2qz4d"/><path class="u3ijpsbvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pen-line"} {...others} />);
}

export default Component;
