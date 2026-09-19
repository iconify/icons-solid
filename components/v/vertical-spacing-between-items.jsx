import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/he167ib7f.css';
import '../../css/b/b4fyyhb5k.css';
import '../../css/k/k5se72bvb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="he167ib7f"/><path class="b4fyyhb5k"/><path class="k5se72bvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vertical-spacing-between-items"} {...others} />);
}

export default Component;
