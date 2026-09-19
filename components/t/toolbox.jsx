import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s17l2xvsl.css';
import '../../css/o/ow87p7mxd.css';
import '../../css/a/aquyrijyg.css';
import '../../css/q/qeqv90bws.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="s17l2xvsl"/><path class="ow87p7mxd"/><path class="aquyrijyg"/><path class="qeqv90bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:toolbox"} {...others} />);
}

export default Component;
