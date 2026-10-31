import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uyl8pnj4k.css';
import '../../css/y/yr04eqofp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uyl8pnj4k"/><path class="yr04eqofp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-basket-duocolor-round"} {...others} />);
}

export default Component;
