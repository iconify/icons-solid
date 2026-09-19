import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rch7_ebcb.css';
import '../../css/r/r8xugpl5l.css';
import '../../css/t/taq167thd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rch7_ebcb"/><path class="r8xugpl5l"/><path class="taq167thd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-content-services"} {...others} />);
}

export default Component;
