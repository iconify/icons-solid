import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgxn76bkp.css';
import '../../css/e/e22nqiizq.css';
import '../../css/h/hkb-iz_va.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="wgxn76bkp"><circle class="e22nqiizq"/><path class="hkb-iz_va"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:react-wordmark"} {...others} />);
}

export default Component;
