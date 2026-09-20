import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi5cmfbdy.css';
import '../../css/i/iopyylbyf.css';
import '../../css/q/q65mc3ubq.css';
import '../../css/f/f-jgyw4bq.css';
import '../../css/b/ba8pa3bhn.css';
import '../../css/q/q5-ygfbts.css';
import '../../css/t/tb1gxhv_w.css';
import '../../css/t/t_qhc2bme.css';
import '../../css/z/zbo15bcou.css';
import '../../css/w/w7c92xijm.css';
import '../../css/d/d0-6x_0uq.css';
import '../../css/z/zv2oi1b3i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wi5cmfbdy"/><path class="iopyylbyf"/><path class="q65mc3ubq"/><path class="f-jgyw4bq"/><path class="ba8pa3bhn"/><path class="q5-ygfbts"/><path class="tb1gxhv_w"/><path class="t_qhc2bme"/><path class="zbo15bcou"/><path class="w7c92xijm"/><path class="d0-6x_0uq"/><path class="zv2oi1b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:greta-thunberg"} {...others} />);
}

export default Component;
