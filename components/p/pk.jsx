import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/k/kgsj2hxdl.css';
import '../../css/d/d0azyfqyj.css';
import '../../css/k/k8_19sp5e.css';
import '../../css/a/ajliigbtc.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="l88qm1qag"/><path class="kgsj2hxdl"/><circle class="d0azyfqyj"/><circle class="k8_19sp5e"/><path class="ajliigbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pk"} {...others} />);
}

export default Component;
