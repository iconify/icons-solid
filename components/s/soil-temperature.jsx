import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmtc1hr0r.css';
import '../../css/u/u24fbtb3s.css';
import '../../css/p/pvis-fbvc.css';
import '../../css/q/qwyxqjp2k.css';
import '../../css/p/pddcmsbna.css';
import '../../css/c/c8kuy_ape.css';
import '../../css/w/wq_-rzx7v.css';
import '../../css/y/ys7xaib4o.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="mmtc1hr0r"/><circle class="u24fbtb3s"/><circle class="pvis-fbvc"/><circle class="qwyxqjp2k"/><circle class="pddcmsbna"/><circle class="c8kuy_ape"/><circle class="wq_-rzx7v"/><path class="ys7xaib4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:soil-temperature"} {...others} />);
}

export default Component;
