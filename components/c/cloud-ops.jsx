import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/a/a21qzhg_s.css';
import '../../css/y/yvuysubju.css';
import '../../css/n/n1q0hcbis.css';
import '../../css/s/st4jq4c_x.css';
import '../../css/q/q4g0v2erb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><g transform="translate(0 1)"><path class="a21qzhg_s"/><path class="yvuysubju"/><circle class="n1q0hcbis"/><circle class="st4jq4c_x"/><circle class="q4g0v2erb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-ops"} {...others} />);
}

export default Component;
