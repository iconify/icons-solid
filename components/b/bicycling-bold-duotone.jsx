import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk_-8fblw.css';
import '../../css/n/ny9p4jbcy.css';
import '../../css/q/qe32f93df.css';
import '../../css/l/ly0fd4b1i.css';
import '../../css/l/lyfl-t8ti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nk_-8fblw"/><path clip-rule="evenodd" class="ny9p4jbcy"/><g clip-rule="evenodd" class="qe32f93df"><path class="ly0fd4b1i"/><path class="lyfl-t8ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-bold-duotone"} {...others} />);
}

export default Component;
