import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/glzc1x51h.css';
import '../../css/a/acieqsbmw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="glzc1x51h"/><rect class="acieqsbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:children-cap"} {...others} />);
}

export default Component;
