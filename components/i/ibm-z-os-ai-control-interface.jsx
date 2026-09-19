import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j60zr3b4x.css';
import '../../css/i/ireqoewfc.css';
import '../../css/c/c7gfsbb7m.css';
import '../../css/t/t1-idpbjp.css';
import '../../css/q/qk4ai5xli.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="j60zr3b4x"/><path class="ireqoewfc"/><circle class="c7gfsbb7m"/><path class="t1-idpbjp"/><path class="qk4ai5xli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-z-os-ai-control-interface"} {...others} />);
}

export default Component;
