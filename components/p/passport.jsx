import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf1ywqqzp.css';
import '../../css/a/a7q38xqfh.css';
import '../../css/h/hqlq2ab-c.css';
import '../../css/q/qm6-ak8nt.css';
import '../../css/a/ah141qbsy.css';
import '../../css/h/hzn_f-hlg.css';
import '../../css/m/m3xnihlsu.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="gf1ywqqzp"/><path class="a7q38xqfh"/><path class="hqlq2ab-c"/><path class="qm6-ak8nt"/><path class="ah141qbsy"/><path class="hzn_f-hlg"/><path class="m3xnihlsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:passport"} {...others} />);
}

export default Component;
