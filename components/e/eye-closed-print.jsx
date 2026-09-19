import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za3tj5b4x.css';
import '../../css/k/kfmx8mkie.css';
import '../../css/p/p0ok30agg.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="za3tj5b4x"/><path class="kfmx8mkie"/><path class="p0ok30agg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:eye-closed-print"} {...others} />);
}

export default Component;
