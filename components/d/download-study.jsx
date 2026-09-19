import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aix_vvb3p.css';
import '../../css/i/i_7li5bcr.css';
import '../../css/i/ij0_k0b-a.css';
import '../../css/k/ki9cgaciu.css';
import '../../css/o/o0yl_2b-a.css';
import '../../css/m/mj-w1e0oj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aix_vvb3p"/><path class="i_7li5bcr"/><path class="ij0_k0b-a"/><path class="ki9cgaciu"/><path class="o0yl_2b-a"/><path class="mj-w1e0oj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:download-study"} {...others} />);
}

export default Component;
