import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1a7fuk7x.css';
import '../../css/o/ouk324llz.css';
import '../../css/j/jg5riebmr.css';
import '../../css/d/d99d2rtqd.css';
import '../../css/o/oy5jdmb9j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="a1a7fuk7x"/><path class="ouk324llz"/><path class="jg5riebmr"/><path class="d99d2rtqd"/><path class="oy5jdmb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expand-left"} {...others} />);
}

export default Component;
