import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mywrjeb3t.css';
import '../../css/e/eij92sb7e.css';
import '../../css/g/g5wlpfz4d.css';
import '../../css/g/gznmo1rha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="mywrjeb3t"/><path class="eij92sb7e"/><path class="g5wlpfz4d"/><path class="gznmo1rha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cashier-02"} {...others} />);
}

export default Component;
