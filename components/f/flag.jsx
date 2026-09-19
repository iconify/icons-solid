import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/khx4ibc_f.css';
import '../../css/k/kl-8s6a-y.css';

const viewBox = {"width":28,"height":32};
const content = `<g class="cuyn6tgcc"><path class="khx4ibc_f"/><path class="kl-8s6a-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:flag"} {...others} />);
}

export default Component;
