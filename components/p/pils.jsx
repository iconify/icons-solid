import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1uzfjbfw.css';
import '../../css/j/jb4o-fbmu.css';
import '../../css/b/bf9_qabtn.css';
import '../../css/t/t0cl5vbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a1uzfjbfw"/><path class="jb4o-fbmu"/><circle class="bf9_qabtn"/><path class="t0cl5vbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pils"} {...others} />);
}

export default Component;
