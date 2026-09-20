import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm9jkgbkg.css';
import '../../css/s/s7ud3zb9r.css';
import '../../css/r/rlomcqbno.css';
import '../../css/p/pclxeftyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lm9jkgbkg"/><path class="s7ud3zb9r"/><path clip-rule="evenodd" class="rlomcqbno"/><path class="pclxeftyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lamp-duotone"} {...others} />);
}

export default Component;
