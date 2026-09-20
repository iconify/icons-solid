import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f_agglgji.css';
import '../../css/q/qlpqn512d.css';
import '../../css/x/x30ge6qtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="f_agglgji"/><path class="qlpqn512d"/><path class="x30ge6qtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:web-camera"} {...others} />);
}

export default Component;
