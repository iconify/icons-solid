import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/ud0gsac3o.css';
import '../../css/e/e1j95ub1l.css';
import '../../css/n/njmh5d5uk.css';
import '../../css/o/ofzr7jp4v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="ud0gsac3o"/><path class="e1j95ub1l"/><path class="njmh5d5uk"/><path class="ofzr7jp4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:reverse-lens"} {...others} />);
}

export default Component;
