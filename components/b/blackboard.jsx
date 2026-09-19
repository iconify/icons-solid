import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p-amvacrb.css';
import '../../css/d/d0ox-ub5d.css';
import '../../css/p/pjdrmmvmh.css';
import '../../css/o/o2cr2ybri.css';
import '../../css/x/xjdbyrbde.css';
import '../../css/g/ghxp5qymf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="p-amvacrb"/><path class="d0ox-ub5d"/><path class="pjdrmmvmh"/><path class="o2cr2ybri"/><path class="xjdbyrbde"/><path class="ghxp5qymf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:blackboard"} {...others} />);
}

export default Component;
