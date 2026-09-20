import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/duc17k2td.css';
import '../../css/e/edr3z_b5u.css';
import '../../css/m/mingyz5ad.css';
import '../../css/e/e3cjgkfkd.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="duc17k2td"/><path class="edr3z_b5u"/><path class="mingyz5ad"/><path class="e3cjgkfkd"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:expand-circle-off"} {...others} />);
}

export default Component;
