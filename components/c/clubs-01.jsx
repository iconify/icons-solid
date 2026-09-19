import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nmhza9kvd.css';
import '../../css/a/ah73_jbsa.css';
import '../../css/k/knu-zc89h.css';
import '../../css/l/lqyxesv5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="nmhza9kvd"/><path class="ah73_jbsa"/><path class="knu-zc89h"/><path class="lqyxesv5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clubs-01"} {...others} />);
}

export default Component;
