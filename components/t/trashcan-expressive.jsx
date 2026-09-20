import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsip1zt2o.css';
import '../../css/e/ekklpejfv.css';
import '../../css/b/bewe7xu9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hsip1zt2o"/><path class="ekklpejfv"/><path clip-rule="evenodd" class="bewe7xu9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:trashcan-expressive"} {...others} />);
}

export default Component;
