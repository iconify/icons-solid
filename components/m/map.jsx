import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bmujc2bpd.css';
import '../../css/k/kls-km9ps.css';
import '../../css/g/gi71v2m0a.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bmujc2bpd"/><path clip-rule="evenodd" class="kls-km9ps"/><path class="gi71v2m0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:map"} {...others} />);
}

export default Component;
