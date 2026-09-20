import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auwgqsius.css';
import '../../css/h/htm7dsofo.css';
import '../../css/z/z2kxi1b5q.css';
import '../../css/n/nq-vd51mu.css';
import '../../css/a/adv5sl5sz.css';
import '../../css/f/f_j9ljbfk.css';
import '../../css/l/l329fns3p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="auwgqsius"/><path class="htm7dsofo"/><path class="z2kxi1b5q"/><path class="nq-vd51mu"/><path class="adv5sl5sz"/><path class="f_j9ljbfk"/><path class="l329fns3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tomcat"} {...others} />);
}

export default Component;
