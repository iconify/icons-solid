import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv09d5sem.css';
import '../../css/g/gc0lb3cvd.css';
import '../../css/y/ytd8-zwcz.css';

const viewBox = {"width":456.8,"height":511.82,"left":27.6,"top":0.18};
const content = `<g class="dv09d5sem"><path class="gc0lb3cvd"/><path class="ytd8-zwcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jackett"} {...others} />);
}

export default Component;
