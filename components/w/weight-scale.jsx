import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pptv-33ge.css';
import '../../css/q/q0u_qhnjt.css';
import '../../css/c/c7rl055gm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="pptv-33ge"/><path class="q0u_qhnjt"/><path class="c7rl055gm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:weight-scale"} {...others} />);
}

export default Component;
