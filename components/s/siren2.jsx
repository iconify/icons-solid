import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_tkij20l.css';
import '../../css/x/x90s9sbvg.css';
import '../../css/q/qr6e_mnfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u_tkij20l"/><path clip-rule="evenodd" class="x90s9sbvg"/><path class="qr6e_mnfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:siren2"} {...others} />);
}

export default Component;
