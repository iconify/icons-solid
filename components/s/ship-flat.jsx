import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj8ch5jba.css';
import '../../css/c/cypcp49qv.css';
import '../../css/z/z1deu_b7x.css';
import '../../css/t/tmxm_38fl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lj8ch5jba"/><path clip-rule="evenodd" class="cypcp49qv"/><path class="z1deu_b7x"/><path class="tmxm_38fl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ship-flat"} {...others} />);
}

export default Component;
