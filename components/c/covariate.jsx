import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq9_gaclr.css';
import '../../css/a/ahbf3vjsr.css';
import '../../css/c/clvzc9bjd.css';
import '../../css/k/k0o2sdfps.css';
import '../../css/g/gzdg7_bpv.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="dq9_gaclr"/><circle class="ahbf3vjsr"/><circle class="clvzc9bjd"/><circle class="k0o2sdfps"/><path class="gzdg7_bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:covariate"} {...others} />);
}

export default Component;
