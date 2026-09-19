import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob03_5z6s.css';
import '../../css/y/ya_ah-bgp.css';
import '../../css/q/q6q3hcc8y.css';
import '../../css/l/leddtrblw.css';
import '../../css/r/rz66g3bfw.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ob03_5z6s"/><circle class="ya_ah-bgp"/><path class="q6q3hcc8y"/><path class="leddtrblw"/><circle class="rz66g3bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cut-outline"} {...others} />);
}

export default Component;
