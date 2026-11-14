import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pde51_1zl.css';
import '../../css/h/hrluizk5r.css';
import '../../css/x/xrv-a1s4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pde51_1zl"/><path class="hrluizk5r"/><path class="xrv-a1s4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:fingerprint"} {...others} />);
}

export default Component;
