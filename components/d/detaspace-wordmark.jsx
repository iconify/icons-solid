import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdfeq4sss.css';
import '../../css/z/zb08icbiq.css';
import '../../css/e/esr-srbpn.css';
import '../../css/j/jtbre-9dm.css';
import '../../css/w/wed910thq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jdfeq4sss"/><path class="zb08icbiq"/><path class="esr-srbpn"/><path class="jtbre-9dm"/><path class="wed910thq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:detaspace-wordmark"} {...others} />);
}

export default Component;
