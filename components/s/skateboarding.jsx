import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edh-5o1vu.css';
import '../../css/b/bn3__tq0m.css';
import '../../css/s/svc_u102u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="edh-5o1vu"/><path clip-rule="evenodd" class="bn3__tq0m"/><path class="svc_u102u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:skateboarding"} {...others} />);
}

export default Component;
