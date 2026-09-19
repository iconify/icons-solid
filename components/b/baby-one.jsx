import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/p/pujtioooa.css';
import '../../css/g/glxmc61cx.css';
import '../../css/y/yw6q8-bqq.css';
import '../../css/s/sghdsebar.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><circle class="pujtioooa"/><path class="glxmc61cx"/><path class="yw6q8-bqq"/><path class="sghdsebar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baby-one"} {...others} />);
}

export default Component;
