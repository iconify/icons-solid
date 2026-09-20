import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/luy9z6pgm.css';
import '../../css/e/ehvke5qnp.css';
import '../../css/a/am157rupi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="luy9z6pgm"/><path class="ehvke5qnp"/><path clip-rule="evenodd" class="am157rupi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:nightstand4-filled"} {...others} />);
}

export default Component;
