import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6n9xac3l.css';
import '../../css/t/t43ptdbru.css';
import '../../css/y/ykw8rgbim.css';
import '../../css/q/qiltki52g.css';
import '../../css/p/pe5f3abbg.css';
import '../../css/q/q051oubcl.css';
import '../../css/y/ymnslvbzp.css';
import '../../css/g/g3u4trbao.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v6n9xac3l"/><path class="t43ptdbru"/><path class="ykw8rgbim"/><path class="qiltki52g"/><path class="pe5f3abbg"/><path class="q051oubcl"/><path class="ymnslvbzp"/><path class="g3u4trbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kubeflow-wordmark"} {...others} />);
}

export default Component;
