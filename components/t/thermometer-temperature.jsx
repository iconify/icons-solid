import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g152-dbzo.css';
import '../../css/a/amu7dtb3y.css';
import '../../css/y/ya-pqcc8r.css';
import '../../css/c/ctkmt3brq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g152-dbzo"/><path class="amu7dtb3y"/><path class="ya-pqcc8r"/><path class="ctkmt3brq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:thermometer-temperature"} {...others} />);
}

export default Component;
