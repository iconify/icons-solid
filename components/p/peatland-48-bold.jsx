import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeucaqz1x.css';
import '../../css/d/dotuhdlvr.css';
import '../../css/p/p49jcubtj.css';
import '../../css/y/y714mktsz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qeucaqz1x"/><path class="dotuhdlvr"/><path class="p49jcubtj"/><path class="y714mktsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:peatland-48-bold"} {...others} />);
}

export default Component;
