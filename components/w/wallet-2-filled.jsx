import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dft5_h09g.css';
import '../../css/j/jzfqtdbbl.css';
import '../../css/q/q9cwh3bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dft5_h09g"/><path class="jzfqtdbbl"/><path class="q9cwh3bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-2-filled"} {...others} />);
}

export default Component;
