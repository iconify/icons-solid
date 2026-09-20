import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maz409bmr.css';
import '../../css/q/q-gxg2xnj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/l5gpzyfzp.css';
import '../../css/b/bfe--hbqp.css';
import '../../css/l/l6lcxtmsr.css';
import '../../css/y/ymdpupivh.css';
import '../../css/v/vwonvri5y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="maz409bmr"/><path class="q-gxg2xnj"/><g class="jn8qy4bru"><path class="l5gpzyfzp"/><path class="bfe--hbqp"/><path class="l6lcxtmsr"/><circle class="ymdpupivh"/><path class="vwonvri5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:augmented-reality"} {...others} />);
}

export default Component;
