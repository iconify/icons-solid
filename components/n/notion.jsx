import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cliop5bpn.css';
import '../../css/n/n4tmlp77t.css';
import '../../css/p/pmy0i-b4f.css';
import '../../css/p/p7kcwhk_m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cliop5bpn"/><path class="n4tmlp77t"/><path class="pmy0i-b4f"/><path class="p7kcwhk_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:notion"} {...others} />);
}

export default Component;
