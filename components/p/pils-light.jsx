import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a1uzfjbfw.css';
import '../../css/j/jb4o-fbmu.css';
import '../../css/p/p847-_yrq.css';
import '../../css/g/gucngzb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="a1uzfjbfw"/><path class="jb4o-fbmu"/><circle class="p847-_yrq"/><path class="gucngzb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pils-light"} {...others} />);
}

export default Component;
