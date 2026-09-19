import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/x/xkue7kb9l.css';
import '../../css/p/pjvfiff0q.css';
import '../../css/d/db-9zy_vl.css';
import '../../css/e/e42-6mb8q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="xkue7kb9l"/><path class="pjvfiff0q"/><path class="db-9zy_vl"/><path class="e42-6mb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:instruction"} {...others} />);
}

export default Component;
