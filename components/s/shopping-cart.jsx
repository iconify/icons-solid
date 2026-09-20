import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/asuw0vbpc.css';
import '../../css/e/ekaoqnb1l.css';
import '../../css/o/o74a4ibec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="asuw0vbpc"/><path class="ekaoqnb1l"/><path class="o74a4ibec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-cart"} {...others} />);
}

export default Component;
