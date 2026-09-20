import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojnr-0b-g.css';
import '../../css/n/n59emjuce.css';
import '../../css/k/k13u1g96c.css';
import '../../css/t/tzfg6uv5i.css';
import '../../css/k/kzh33ft0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ojnr-0b-g"/><path clip-rule="evenodd" class="n59emjuce"/><path class="k13u1g96c"/><path class="tzfg6uv5i"/><path class="kzh33ft0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:atom-bold"} {...others} />);
}

export default Component;
